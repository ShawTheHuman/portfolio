import React, { useState, useEffect, useRef } from 'react'
import MessageBubble from './MessageBubble'
import QuickReply from './QuickReply'
import TypingIndicator from './TypingIndicator'
import conversationData from '../data/conversationData'
import analytics from '../utils/analytics'
import '../styles/ChatInterface.css'

const ChatInterface = () => {
    const [messages, setMessages] = useState([]);
    const [currentNode, setCurrentNode] = useState('welcome');
    const [isTyping, setIsTyping] = useState(false);
    const [showQuickReplies, setShowQuickReplies] = useState(false);
    const messagesEndRef = useRef(null);
    const chatContainerRef = useRef(null);

    // Initialize conversation
    useEffect(() => {
        // Load from session storage if available
        const savedMessages = sessionStorage.getItem('chat_messages');
        const savedNode = sessionStorage.getItem('current_node');

        if (savedMessages && savedNode) {
            setMessages(JSON.parse(savedMessages));
            setCurrentNode(savedNode);
            setShowQuickReplies(true);
        } else {
            // Start fresh conversation
            startConversation('welcome');
        }
    }, []);

    // Save to session storage
    useEffect(() => {
        if (messages.length > 0) {
            sessionStorage.setItem('chat_messages', JSON.stringify(messages));
            sessionStorage.setItem('current_node', currentNode);
        }
    }, [messages, currentNode]);

    // Auto-scroll to bottom
    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, showQuickReplies]);

    const scrollToBottom = (smooth = true) => {
        if (smooth) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
        } else {
            messagesEndRef.current?.scrollIntoView({ behavior: 'auto', block: 'end' });
        }
    };

    const startConversation = (nodeId) => {
        const node = conversationData[nodeId];
        if (!node) return;

        setShowQuickReplies(false);
        setIsTyping(true);

        // Simulate typing delay
        setTimeout(() => {
            const newMessages = node.botMessages.map((msg, index) => ({
                id: `${nodeId}_${Date.now()}_${index}`,
                type: 'bot',
                content: msg,
                timestamp: new Date().toISOString(),
                nodeId: nodeId,
                image: index === node.botMessages.length - 1 ? node.image : null,
                isClickable: false
            }));

            setMessages(newMessages);
            setCurrentNode(nodeId);
            setIsTyping(false);

            // Track in analytics
            newMessages.forEach(msg => {
                analytics.trackMessageReceived(msg.content, msg.id);
            });

            // Handle external links
            if (node.externalLink) {
                window.open(node.externalLink, '_blank');
            }

            // Show quick replies after a brief delay
            setTimeout(() => {
                setShowQuickReplies(true);
            }, 300);
        }, 800);
    };

    const handleQuickReply = (reply) => {
        // Track selection
        analytics.trackQuickReplySelected(reply.id, reply.label);
        analytics.trackConversationPath(reply.id);

        // Add user message
        const userMessage = {
            id: `user_${Date.now()}`,
            type: 'user',
            content: reply.label,
            timestamp: new Date().toISOString(),
            nodeId: currentNode,
            isClickable: false
        };

        analytics.trackMessageSent(userMessage.content);

        setMessages(prev => [...prev, userMessage]);
        setShowQuickReplies(false);

        // Navigate to next conversation node
        setTimeout(() => {
            navigateToNode(reply.id);
        }, 500);
    };

    const navigateToNode = (nodeId) => {
        const node = conversationData[nodeId];
        if (!node) return;

        setIsTyping(true);
        setCurrentNode(nodeId);

        // Simulate typing delay
        setTimeout(() => {
            const newBotMessages = node.botMessages.map((msg, index) => ({
                id: `${nodeId}_${Date.now()}_${index}`,
                type: 'bot',
                content: msg,
                timestamp: new Date().toISOString(),
                nodeId: nodeId,
                image: index === node.botMessages.length - 1 ? node.image : null,
                isClickable: true // Make bot messages clickable for navigation back
            }));

            setMessages(prev => {
                // Make all previous messages clickable
                const updatedPrevMessages = prev.map(msg => ({
                    ...msg,
                    isClickable: msg.type === 'bot' || msg.type === 'user'
                }));
                return [...updatedPrevMessages, ...newBotMessages];
            });

            setIsTyping(false);

            // Track in analytics
            newBotMessages.forEach(msg => {
                analytics.trackMessageReceived(msg.content, msg.id);
            });

            // Handle external links
            if (node.externalLink) {
                window.open(node.externalLink, '_blank');
            }

            // Show quick replies
            setTimeout(() => {
                setShowQuickReplies(true);
            }, 300);
        }, 800);
    };

    const handleMessageClick = (messageId, timestamp) => {
        const clickedMessage = messages.find(msg => msg.id === messageId);
        if (!clickedMessage || !clickedMessage.isClickable) return;

        analytics.trackMessageClicked(messageId, timestamp);

        // Find the node this message belongs to
        const targetNodeId = clickedMessage.nodeId;

        // Remove all messages after the clicked message
        const clickedIndex = messages.findIndex(msg => msg.id === messageId);
        const newMessages = messages.slice(0, clickedIndex + 1);

        // Navigate back to that conversation state
        analytics.trackNavigationBack(currentNode, targetNodeId);

        setMessages(newMessages);
        setCurrentNode(targetNodeId);
        setShowQuickReplies(true);
    };

    const currentNodeData = conversationData[currentNode];

    return (
        <div className="chat-interface">
            <div className="chat-container" ref={chatContainerRef}>
                <div className="messages-container">
                    {messages.map((message) => (
                        <MessageBubble
                            key={message.id}
                            type={message.type}
                            content={message.content}
                            timestamp={message.timestamp}
                            image={message.image}
                            messageId={message.id}
                            isClickable={message.isClickable}
                            onClick={handleMessageClick}
                        />
                    ))}

                    {isTyping && <TypingIndicator />}

                    {/* Reviews Widget */}
                    {currentNodeData?.showReviewsWidget && !isTyping && (
                        <div className="reviews-widget-container">
                            <div className="reviews-widget-embed">
                                <iframe
                                    src="https://adplist.org/widgets/reviews?src=nick-braver"
                                    title="All Reviews"
                                    width="100%"
                                    height="560px"
                                    loading="lazy"
                                    style={{ border: 0, borderRadius: '16px' }}
                                />
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {showQuickReplies && currentNodeData?.quickReplies && (
                    <div className="quick-replies-container">
                        <QuickReply
                            replies={currentNodeData.quickReplies}
                            onReplyClick={handleQuickReply}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChatInterface;
