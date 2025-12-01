import React, { useState, useRef, useEffect } from 'react'
import '../styles/MessageBubble.css'
import QuickReply from './QuickReply'

const MessageBubble = ({
    type = 'bot',
    content,
    timestamp,
    image,
    onClick,
    isClickable = false,
    messageId,
    hasQuickReplies = false,
    quickReplies = null,
    onUndo = null
}) => {
    const [showUndoDropdown, setShowUndoDropdown] = useState(false);
    const undoRef = useRef(null);

    const handleClick = () => {
        if (isClickable && onClick) {
            onClick(messageId, timestamp);
        }
    };

    const handleUndoClick = (e) => {
        e.stopPropagation();
        setShowUndoDropdown(!showUndoDropdown);
    };

    const handleQuickReplyFromUndo = (reply) => {
        setShowUndoDropdown(false);
        // The onUndo callback will reset the conversation and navigate
        if (onUndo) {
            onUndo(messageId, reply);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (undoRef.current && !undoRef.current.contains(event.target)) {
                setShowUndoDropdown(false);
            }
        };

        if (showUndoDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showUndoDropdown]);

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

                {hasQuickReplies && onUndo && (
                    <div className="message-undo-container" ref={undoRef}>
                        <div className="message-undo-hover-area">
                            <button
                                className="message-undo-button"
                                onClick={handleUndoClick}
                                title="Show alternative options"
                                aria-label="Show alternative options"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="1 4 1 10 7 10"></polyline>
                                    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
                                </svg>
                            </button>
                        </div>

                        {showUndoDropdown && quickReplies && (
                            <div className="message-undo-dropdown">
                                <QuickReply
                                    replies={quickReplies}
                                    onReplyClick={handleQuickReplyFromUndo}
                                    isCompact={true}
                                />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MessageBubble;
