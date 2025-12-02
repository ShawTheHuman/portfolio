import React, { useState } from 'react';
import { setCookie } from '../utils/cookies';
import '../styles/PasswordPrompt.css';

const PasswordPrompt = ({ onUnlock }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.startsWith('access-') && password.length > 'access-'.length) {
            // Set cookie with 7-day expiration
            setCookie('portfolio_access', password, 7);

            // Track the password variant
            fetch('/api/track', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ variant: password.substring('access-'.length) }),
            });
            onUnlock();
        } else {
            setError('Invalid password format.');
        }
    };

    return (
        <div className="password-prompt-overlay">
            <div className="password-prompt-container">
                <h2>Access Required</h2>
                <p>Please enter the password to view this site.</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        autoFocus
                    />
                    <button type="submit">Unlock</button>
                </form>
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
};

export default PasswordPrompt;
