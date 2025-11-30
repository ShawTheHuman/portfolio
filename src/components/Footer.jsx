import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-content">
                <div className="footer-bottom">
                    <p className="footer-credits">Vibe-coded and launched with AntiGravity. Designed in Figma.</p>
                    <p className="footer-copyright">&copy; {new Date().getFullYear()} Nick Braver. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
