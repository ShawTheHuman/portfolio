// Theme management utility
class ThemeManager {
    constructor() {
        this.themes = {
            dark: 'dark',
            light: 'light'
        };
        this.currentTheme = this.getInitialTheme();
        this.applyTheme(this.currentTheme);
    }

    getInitialTheme() {
        // Check localStorage first
        const savedTheme = localStorage.getItem('portfolio_theme');
        if (savedTheme && Object.values(this.themes).includes(savedTheme)) {
            return savedTheme;
        }

        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return this.themes.light;
        }

        // Default to dark
        return this.themes.dark;
    }

    applyTheme(theme) {
        const root = document.documentElement;

        if (theme === this.themes.light) {
            // Light theme variables
            root.style.setProperty('--bg-primary', '#ffffff');
            root.style.setProperty('--bg-primary-rgb', '255, 255, 255');
            root.style.setProperty('--bg-secondary', '#f5f5f5');
            root.style.setProperty('--bg-card', '#ffffff');

            root.style.setProperty('--text-primary', '#111111');
            root.style.setProperty('--text-secondary', '#525252');
            root.style.setProperty('--text-muted', '#a3a3a3');

            root.style.setProperty('--border-color', '#e5e5e5');

            root.style.setProperty('--user-bubble-bg', '#3b82f6');
            root.style.setProperty('--user-bubble-text', '#ffffff');
            root.style.setProperty('--bot-bubble-bg', '#f1f1f1');
            root.style.setProperty('--bot-bubble-text', '#111111');
        } else {
            // Dark theme variables (default)
            root.style.setProperty('--bg-primary', '#050505');
            root.style.setProperty('--bg-primary-rgb', '5, 5, 5');
            root.style.setProperty('--bg-secondary', '#111111');
            root.style.setProperty('--bg-card', '#1a1a1a');

            root.style.setProperty('--text-primary', '#ffffff');
            root.style.setProperty('--text-secondary', '#a1a1aa');
            root.style.setProperty('--text-muted', '#52525b');

            root.style.setProperty('--border-color', '#27272a');

            root.style.setProperty('--user-bubble-bg', '#3b82f6');
            root.style.setProperty('--user-bubble-text', '#ffffff');
            root.style.setProperty('--bot-bubble-bg', '#27272a');
            root.style.setProperty('--bot-bubble-text', '#ffffff');
        }

        // Set data attribute for CSS targeting
        root.setAttribute('data-theme', theme);
        this.currentTheme = theme;
    }

    toggleTheme() {
        const newTheme = this.currentTheme === this.themes.dark
            ? this.themes.light
            : this.themes.dark;

        this.setTheme(newTheme);
        return newTheme;
    }

    setTheme(theme) {
        if (!Object.values(this.themes).includes(theme)) {
            console.warn(`Invalid theme: ${theme}`);
            return;
        }

        this.applyTheme(theme);
        localStorage.setItem('portfolio_theme', theme);
    }

    getCurrentTheme() {
        return this.currentTheme;
    }

    isDarkMode() {
        return this.currentTheme === this.themes.dark;
    }
}

// Export singleton instance
const themeManager = new ThemeManager();
export default themeManager;
