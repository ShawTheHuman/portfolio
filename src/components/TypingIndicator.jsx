import React from 'react'
import '../styles/TypingIndicator.css'

const TypingIndicator = () => {
    return (
        <div className="typing-indicator-wrapper">
            <div className="typing-indicator">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
            </div>
        </div>
    );
};

export default TypingIndicator;
