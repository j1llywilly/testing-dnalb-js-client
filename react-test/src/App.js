import logo from './logo.svg';
import './App.css';
import { BlandWebClient } from './es5/index.js';
import { useEffect, useState } from 'react';

const sdk = new BlandWebClient(
  '46f37229-7d12-44be-b343-6e68274cfbea',
  'bb26f357-660a-462e-8bac-49fc30a578fb'
);

function App() {
  const [isCalling, setIsCalling] = useState(false);
  const state = sdk.isTalking;

  useEffect(() => {
    sdk.on("conversationStarted", () => {
      console.log('conversationStarted');
    });

    sdk.on("conversationEnded", ({ code, reason }) => {
      console.log("Closed with code:", code, ", reason:", reason);
      setIsCalling(false); // Update button to "Start" when conversation ends
    });

    sdk.on("error", (error) => {
      console.log("Error occured", error);
      setIsCalling(false);
    })

    sdk.on("update", (update) => {
      console.log('update', update);
    });
  }, []);

  const handleStartCall = async () => {
    if (isCalling) {
      sdk.stopConversation();
    } else {
      sdk.initConversation({
        callId: "test",
        sampleRate: 44100,
      })
      .catch(console.error);

      setIsCalling(true);
    };
  }

  return (
    <div className="App">
      <p>hello world</p>
      <button onClick={(e) => {
        handleStartCall()
      }}>{isCalling ? "Stop" : "Start"}</button>
      <p>IsTalking: {state ? "true" : "false"}</p>
      <p>IsCalling: {isCalling ? "true" : "False"}</p>
    </div>
  );
}

export default App;
