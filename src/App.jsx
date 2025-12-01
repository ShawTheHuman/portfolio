import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import PasswordPrompt from './components/PasswordPrompt'
import './styles/global.css'

function App() {
    const [unlocked, setUnlocked] = useState(sessionStorage.getItem('unlocked') === 'true');

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
                <Header />
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
