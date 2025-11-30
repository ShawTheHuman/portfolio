import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

import OptionsMenu from './OptionsMenu'

const Header = () => {
    return (
        <header className="header animate-fade-in-up">
            <Link to="/" className="header-logo">
                Nick Braver
            </Link>
            <nav className="header-nav">
                <OptionsMenu />
            </nav>
        </header>
    )
}

export default Header
