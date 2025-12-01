import React from 'react'
import '../styles/QuickReply.css'

const QuickReply = ({ replies, onReplyClick, disabled = false, isCompact = false }) => {
    if (!replies || replies.length === 0) return null;

    return (
        <div className={`quick-reply-container ${isCompact ? 'compact' : ''}`}>
            {replies.map((reply) => (
                <button
                    key={reply.id}
                    className="quick-reply-button"
                    onClick={() => onReplyClick(reply)}
                    disabled={disabled}
                >
                    {reply.icon && <span className="quick-reply-icon">{reply.icon}</span>}
                    <span className="quick-reply-label">{reply.label}</span>
                </button>
            ))}
        </div>
    );
};

export default QuickReply;
