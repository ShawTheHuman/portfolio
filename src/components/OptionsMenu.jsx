import React, { useState, useRef, useEffect } from 'react'
import '../styles/OptionsMenu.css'
import themeManager from '../utils/themeManager'
import analytics from '../utils/analytics'

const OptionsMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(themeManager.isDarkMode());
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            analytics.trackOptionsMenuOpened();
        }
    };

    const handleThemeToggle = () => {
        const newTheme = themeManager.toggleTheme();
        setIsDarkMode(themeManager.isDarkMode());
        analytics.trackThemeToggled(newTheme);
    };

    const handleResumeDownload = () => {
        analytics.trackResumeDownload();
        // TODO: Update with actual resume URL
        window.open('/resume.pdf', '_blank');
        setIsOpen(false);
    };

    const handleContact = () => {
        analytics.trackContactClicked();
        // TODO: Update with actual email or contact form
        window.location.href = 'mailto:nick@braver.design';
        setIsOpen(false);
    };

    return (
        <div className="options-menu" ref={menuRef}>
            <button className="options-menu-button" onClick={toggleMenu} aria-label="Options menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                </svg>
            </button>

            {isOpen && (
                <div className="options-menu-dropdown">
                    <div className="options-menu-item theme-toggle">
                        <span className="options-menu-label">
                            {isDarkMode ? '🌙' : '☀️'} {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                        </span>
                        <button
                            className={`theme-toggle-button ${isDarkMode ? 'dark' : 'light'}`}
                            onClick={handleThemeToggle}
                            aria-label="Toggle theme"
                        >
                            <span className="theme-toggle-slider"></span>
                        </button>
                    </div>

                    <button className="options-menu-item" onClick={handleResumeDownload}>
                        <span className="options-menu-icon">📄</span>
                        <span className="options-menu-label">Download Resume</span>
                    </button>

                    <button className="options-menu-item" onClick={handleContact}>
                        <span className="options-menu-icon">✉️</span>
                        <span className="options-menu-label">Contact Me</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default OptionsMenu;
