import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="104267ed-fff8-4300-bbb9-2fca7e95e456"
            userName="User1"
            userSecret="secret"
        />
    );
}

export default App;