import { EventEmitter } from "eventemitter3";
import Websocket from "isomorphic-ws";
import { workletCode } from "./audioWorklet";

const baseEndpoint = "wss://web.bland.ai";

interface AudioWsConfig {
    callId: string;
    enableUpdate?: boolean;
    customEndpoint?: string;
    agentId?: string | null;
    sessionToken?: string | null;
};

interface StartConversationConfig {
    callId: string;
    sampleRate: number;
    customStream?: MediaStream;
    enableUpdate?: boolean;

}

function convertUint8ToFloat32(array: Uint8Array): Float32Array {
    const targetArray = new Float32Array(array.byteLength / 2);

    // A DataView is used to read our 16-bit little-endian samples out of the Uint8Array buffer
    const sourceDataView = new DataView(array.buffer);

    // Loop through, get values, and divide by 32,768
    for (let i = 0; i < targetArray.length; i++) {
        targetArray[i] = sourceDataView.getInt16(i * 2, true) / Math.pow(2, 16 - 1);
    }
    return targetArray;
}

function convertFloat32ToUint8(array: Float32Array): Uint8Array {
    const buffer = new ArrayBuffer(array.length * 2);
    const view = new DataView(buffer);

    for (let i = 0; i < array.length; i++) {
        const value = (array[i] as number) * 32768;
        view.setInt16(i * 2, value, true); // true for little-endian
    }

    return new Uint8Array(buffer);
}

class AudioWsClient extends EventEmitter {
    private ws: Websocket;
    private pingTimeout: ReturnType<typeof setTimeout> | null = null;
    private pingInterval: ReturnType<typeof setInterval> | null = null;
    private wasDisconnected: boolean = false;
    private pingIntervalTime: number = 5000;
    private audioIndex: number = 0;

    constructor(audioWsConfig: AudioWsConfig) {
        super();
        let endpoint = baseEndpoint + `?agent=${audioWsConfig.agentId}&token=${audioWsConfig.sessionToken}`;

        this.ws = new Websocket(endpoint);
        this.ws.binaryType = "arraybuffer";

        this.ws.onopen = () => {
            this.emit("open");
        };

        this.ws.onmessage = (event: any) => {
            try {
                const data = JSON.parse(event.data);
                // this will be for handling mark messages
            } catch (error) {
                //console.log({ error });
            };

            if (typeof event.data === "string" && event.data === "pong") {
                this.resetPingTimeout();
            } else if (event.data instanceof ArrayBuffer) {
                const audioData = new Uint8Array(event.data);
                this.emit("audio", audioData);
            } else if (typeof (event.data) === "string") {
                if (event.data === "clear") {
                    this.emit("clear");
                };
            };
        };

        this.ws.onclose = (event: any) => {
            this.emit("disconnect");
            this.emit("close", event.code, event.reason);
        };

        this.ws.onerror = (event: any) => {
            this.emit("error", event);
        };
    };

    resetPingTimeout() {
        if (this.pingTimeout != null) {
            clearTimeout(this.pingTimeout);
        }
        this.pingTimeout = setTimeout(() => {
            if (this.pingIntervalTime === 5000) {
                this.adjustPingFrequency(1000);
                this.pingTimeout = setTimeout(() => {
                    this.emit("disconnect");
                    this.wasDisconnected = true;
                }, 3000);
            }
        }, this.pingIntervalTime);
    };

    adjustPingFrequency(newInterval: number) {
        if (this.pingIntervalTime !== newInterval) {
            if (this.pingInterval != null) {
                clearInterval(this.pingInterval);
            }
            this.pingIntervalTime = newInterval;
        }
    };

    send(audio: Uint8Array) {
        if (this.ws.readyState === 1) {
            this.ws.send(audio);
        };
    };

    close() {
        this.ws.close();
    };
};

export class BlandWebClient extends EventEmitter {
    private liveClient!: AudioWsClient;
    private audioContext!: AudioContext;
    private isCalling: boolean = false;
    private stream!: MediaStream;

    // Chrome
    private gainNode!: GainNode;
    private audioNode!: AudioWorkletNode;
    private customEndpoint!: string;

    // Others
    private captureNode: ScriptProcessorNode | null = null;
    private audioData: Float32Array[] = [];
    private audioDataIndex: number = 0;
    public isTalking: boolean = false;

    private agentId: string | null;
    private sessionToken: string | null;

    constructor(agentId: string, sessionToken: string, customEndpoint?: string) {
        super();

        if (customEndpoint) this.customEndpoint = customEndpoint;
        this.agentId = agentId;
        this.sessionToken = sessionToken;
        this.isTalking = false;
    };

    // bland initialize();
    public async initConversation(
        config: StartConversationConfig
    ): Promise<void> {
        try {
            await this.setupAudioPlayback(
                config.sampleRate,
                config.customStream
            );

            this.liveClient = new AudioWsClient({
                callId: "test",
                customEndpoint: this.customEndpoint,
                agentId: this.agentId,
                sessionToken: this.sessionToken,
            });

            this.handleAudioEvents();
            this.isCalling = true;
        } catch (error) {
            this.emit("Error", (error as Error).message);
        };
    };

    public stopConversation(): void {
        this.isCalling = false;
        this.liveClient?.close();
        this.audioContext?.suspend();
        this.audioContext?.close();

        if (this.isAudioWorkletSupported()) {
            this.audioNode?.disconnect();
            this.audioNode = null;
        } else {
            if (this.captureNode) {
                this.captureNode.disconnect();
                this.captureNode.onaudioprocess = null;
                this.captureNode = null;
                this.audioData = [];
                this.audioDataIndex = 0;
            }
        }

        this.liveClient = null;
        this.stream?.getTracks().forEach((track) => track.stop());
        this.audioContext = null;
        this.stream = null;
    }

    private async setupAudioPlayback(
        sampleRate: number,
        customStream?: MediaStream
    ): Promise<void> {
        this.audioContext = new AudioContext({ sampleRate });
        try {
            this.stream = customStream ||
                (await navigator.mediaDevices.getUserMedia({
                    audio: {
                        sampleRate: sampleRate,
                        echoCancellation: true,
                        noiseSuppression: true,
                        channelCount: 1
                    }
                }));
        } catch (error) {
            throw new Error("User rejected microphone access");
        };

        if (this.isAudioWorkletSupported()) {
            this.audioContext.resume();
            const blob = new Blob([workletCode], { type: "application/javascript" });
            const blobUrl = URL.createObjectURL(blob);
            console.log({ blobUrl });

            await this.audioContext.audioWorklet.addModule(blobUrl);

            this.audioNode = new AudioWorkletNode(
                this.audioContext,
                "capture-and-playback-processor"
            );

            this.audioNode.port.onmessage = (event) => {
                let data = event.data;
                if (Array.isArray(data)) {
                    //console.log(data)
                    //this.emit("audio", data[0]);
                    let eventName = data[0];
                    if (eventName === "capture") {
                        this.liveClient?.send(data[1]);
                    } else if (eventName === "playback") {
                        this.emit("audio", data[1]);
                    };
                } else {

                    console.log({ data })

                    if (data === "clear") {
                        this.audioData = [];
                    }

                    if (data === "agent_stop_talking") {
                        this.emit("agentStopTalking");
                    } else if (data === "agent_start_talking") {
                        this.emit("agentStartTalking");
                    };
                };
            };

            const source = this.audioContext.createMediaStreamSource(this.stream);
            source.connect(this.audioNode);
            this.audioNode.connect(this.audioContext.destination);
        } else {
            const source = this.audioContext.createMediaStreamSource(this.stream);
            this.captureNode = this.audioContext.createScriptProcessor(2048, 1, 1);
            this.captureNode.onaudioprocess = (
                AudioProcessingEvent: AudioProcessingEvent
            ) => {
                if (this.isCalling) {
                    const pcmFloat32Data = AudioProcessingEvent.inputBuffer.getChannelData(0);
                    const pcmData = convertFloat32ToUint8(pcmFloat32Data);

                    const bufferLength = pcmFloat32Data.length;
                    const outputData = new Int16Array(bufferLength);

                    for (let i = 0; i < bufferLength; i++) {
                        const compression = 32767;
                        const pcmSample = Math.max(-1, Math.min(1, pcmFloat32Data[i]));
                        outputData[i] = pcmSample * compression;
                    };

                    this.liveClient.send(pcmData);
                    const outputBuffer = AudioProcessingEvent.outputBuffer;
                    const outputChannel = outputBuffer.getChannelData(0);

                    for (let i = 0; i < outputChannel.length; ++i) {
                        if (this.audioData.length > 0) {
                            outputChannel[i] = this.audioData[0][this.audioDataIndex++];
                            if (this.audioDataIndex === this.audioData[0].length) {
                                this.audioData.shift();
                                this.audioDataIndex = 0;
                            };
                        } else {
                            outputChannel[i] = 0;
                        };
                    };

                    this.emit("audio", convertFloat32ToUint8(outputChannel));
                    if (!this.audioData.length && this.isTalking) {
                        this.isTalking = false;
                        this.emit("agentStopTalking");
                    };
                };
            };

            source.connect(this.captureNode);
            this.captureNode.connect(this.audioContext.destination);
        };
    };

    private handleAudioEvents(): void {
        // Exposed
        this.liveClient.on("open", () => {
            this.emit("conversationStarted");
        });

        this.liveClient.on("audio", (audio: Uint8Array) => {
            this.playAudio(audio);
        });

        this.liveClient.on("disconnect", () => {
            this.emit("disconnect");
        });

        this.liveClient.on("reconnect", () => {
            this.emit("reconnect");
        });

        this.liveClient.on("error", (error) => {
            this.emit("error", error);
            if (this.isCalling) {
                this.stopConversation();
            };
        });

        this.liveClient.on("close", (code: number, reason: string) => {
            if (this.isCalling) {
                this.stopConversation();
            };
            this.emit("conversationEnded", { code, reason });
        });

        this.liveClient.on("update", (update) => {
            this.emit("update", update);
        });

        // Not exposed
        this.liveClient.on("clear", () => {
            if (this.isAudioWorkletSupported()) {
                this.audioNode.port.postMessage("clear");
            } else {
                this.audioData = [];
                this.audioDataIndex = 0;
                if (this.isTalking) {
                    this.isTalking = false;
                    this.emit("agentStopTalking");
                }
            }
        });
    };

    private isAudioWorkletSupported(): boolean {
        return (
            /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
        );
    };

    private playAudio(audio: Uint8Array): void {
        if (this.isAudioWorkletSupported()) {
            this.audioNode.port.postMessage(audio);
        } else {
            const float32Data = convertUint8ToFloat32(audio);
            this.audioData.push(float32Data);

            if (!this.isTalking) {
                this.isTalking = true;
                this.emit("agentStartTalking");
            };
        };
    };
};