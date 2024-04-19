import { BlandWebClient } from '../dist/lib/es5/index.js';

// Example usage
document.addEventListener('DOMContentLoaded', async () => {
    document.getElementById('btn').addEventListener('click', async () => {
        // it has to initialize after a user gesture
        const sdk = new BlandWebClient(
            '46f37229-7d12-44be-b343-6e68274cfbea', 
            'bb26f357-660a-462e-8bac-49fc30a578fb'
        );
        await sdk.initConversation({
            callId: "test",
            sampleRate: 44100,
        });
    });
});
