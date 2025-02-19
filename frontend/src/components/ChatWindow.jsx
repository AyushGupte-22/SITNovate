import React, { useState, useEffect } from 'react';
import Message from './Message';
import api from '../services/api'; // Import the API service

function ChatWindow() {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');

    useEffect(() => {
        // Fetch initial messages or conversation history if needed
        // Example:  const initialMessages = await api.getMessages();
        //            setMessages(initialMessages);
    }, []);

    const sendMessage = async () => {
        const message = userInput.trim();
        if (message === '') return;

        setMessages([...messages, { text: message, sender: 'user' }]); // Optimistic update
        setUserInput('');

        try {
            const botReply = await api.sendMessage(message); // Send to backend
            setMessages([...messages, { text: message, sender: 'user' }, botReply]);
        } catch (error) {
            console.error("Error sending message:", error);
            // Handle error (e.g., display an error message)
        }
    };

    return (
        <div className="chat-window">
            <div className="message-list">
                {messages.map((msg, index) => (
                    <Message key={index} message={msg} />
                ))}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default ChatWindow;