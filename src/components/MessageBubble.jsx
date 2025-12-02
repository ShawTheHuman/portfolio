import React from 'react'
import '../styles/MessageBubble.css'

const MessageBubble = ({
    type = 'bot',
    content,
    timestamp,
    image,
    onClick,
    isClickable = false,
    messageId
}) => {
    const handleClick = () => {
        if (isClickable && onClick) {
            onClick(messageId, timestamp);
        }
    };

    return (
        <div className={`message-bubble-wrapper ${type}`}>
            <div
                className={`message-bubble ${type} ${isClickable ? 'clickable' : ''}`}
                onClick={handleClick}
            >
                {image && (
                    <div className="message-image">
                        <img src={image} alt="Project visual" />
                    </div>
                )}
                <div className="message-content">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default MessageBubble;
