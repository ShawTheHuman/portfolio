import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

const Header = ({ onWorkClick }) => {
    return (
        <header className="header animate-fade-in-up">
            <Link to="/" className="header-logo">
                Nick Braver
            </Link>
            <nav className="header-nav">
                <ul>
                    <li><button onClick={onWorkClick} className="nav-link">Work</button></li>
                    <li><a href="https://flowcv.com/resume/sdl3925u2j" target="_blank" rel="noopener noreferrer">Resume</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
