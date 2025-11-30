// Analytics tracking service
class Analytics {
    constructor() {
        this.events = [];
        this.sessionId = this.generateSessionId();
        this.enabled = true; // Set to false to disable tracking
    }

    generateSessionId() {
        return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    log(eventType, eventData = {}) {
        if (!this.enabled) return;

        const event = {
            sessionId: this.sessionId,
            timestamp: new Date().toISOString(),
            eventType,
            ...eventData
        };

        this.events.push(event);

        // Log to console in development
        if (import.meta.env.DEV) {
            console.log('[Analytics]', event);
        }

        // Store locally
        this.persistEvent(event);

        // Optionally send to backend
        // this.sendToBackend(event);
    }

    persistEvent(event) {
        try {
            const stored = localStorage.getItem('portfolio_analytics') || '[]';
            const events = JSON.parse(stored);
            events.push(event);

            // Keep only last 100 events to avoid storage issues
            if (events.length > 100) {
                events.shift();
            }

            localStorage.setItem('portfolio_analytics', JSON.stringify(events));
        } catch (error) {
            console.error('Failed to persist analytics event:', error);
        }
    }

    // Event tracking methods
    trackMessageSent(messageContent) {
        this.log('message_sent', { content: messageContent });
    }

    trackMessageReceived(messageContent, messageId) {
        this.log('message_received', { content: messageContent, messageId });
    }

    trackMessageClicked(messageId, timestamp) {
        this.log('message_clicked', { messageId, originalTimestamp: timestamp });
    }

    trackQuickReplySelected(replyId, replyLabel) {
        this.log('quick_reply_selected', { replyId, replyLabel });
    }

    trackNavigationBack(fromMessageId, toMessageId) {
        this.log('navigation_back', { from: fromMessageId, to: toMessageId });
    }

    trackThemeToggled(newTheme) {
        this.log('theme_toggled', { theme: newTheme });
    }

    trackResumeDownload() {
        this.log('resume_downloaded');
    }

    trackContactClicked() {
        this.log('contact_clicked');
    }

    trackOptionsMenuOpened() {
        this.log('options_menu_opened');
    }

    trackConversationPath(conversationId) {
        this.log('conversation_path', { conversationId });
    }

    // Get analytics summary
    getEventsSummary() {
        return {
            sessionId: this.sessionId,
            totalEvents: this.events.length,
            events: this.events
        };
    }

    // Export analytics data
    exportAnalytics() {
        const dataStr = JSON.stringify(this.getEventsSummary(), null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `analytics_${this.sessionId}.json`;
        link.click();
        URL.revokeObjectURL(url);
    }
}

// Export singleton instance
const analytics = new Analytics();
export default analytics;
