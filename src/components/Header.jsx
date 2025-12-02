import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

import OptionsMenu from './OptionsMenu'

const Header = () => {
    return (
        <header className="header animate-fade-in-up">
            <div className="header-content">
                <Link to="/" className="header-logo" onClick={() => {
                    sessionStorage.removeItem('chat_messages');
                    sessionStorage.removeItem('current_node');
                    sessionStorage.removeItem('panel_state');
                    window.dispatchEvent(new Event('reset-chat'));
                }}>
                    Nick Braver
                </Link>
                <nav className="header-nav">
                    <OptionsMenu />
                </nav>
            </div>
        </header>
    )
}

export default Header
