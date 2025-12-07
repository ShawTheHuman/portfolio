import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PasswordPrompt from './components/PasswordPrompt'
import { getCookie } from './utils/cookies'
import './styles/global.css'

function App() {
    const [unlocked, setUnlocked] = useState(() => {
        // Check cookie first, then sessionStorage
        const cookiePassword = getCookie('portfolio_access');
        if (cookiePassword && cookiePassword.startsWith('access-') && cookiePassword.length > 'access-'.length) {
            return true;
        }
        return sessionStorage.getItem('unlocked') === 'true';
    });

    useEffect(() => {
        if (unlocked) {
            sessionStorage.setItem('unlocked', 'true');
        }
    }, [unlocked]);

    if (!unlocked) {
        return <PasswordPrompt onUnlock={() => setUnlocked(true)} />;
    }

    return (
        <Router>
            <div className="app-container">
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App
