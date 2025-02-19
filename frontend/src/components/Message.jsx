import React from 'react';

function Message({ message }) {
    const messageClass = message.sender === 'user' ? 'user-message' : 'bot-message';
    return (
        <div className={`message ${messageClass}`}>
            {message.text}
        </div>
    );
}

export default Message;