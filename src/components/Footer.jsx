import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-content">
                <div className="footer-main">
                    <h2 className="footer-title">Let's work together</h2>
                    <p className="footer-text">
                        Currently open to new opportunities. Feel free to reach out if you'd like to collaborate.
                    </p>
                    <a href="mailto:hello@nickbraver.com" className="footer-email">hello@nickbraver.com</a>
                </div>

                <div className="footer-socials">
                    <a href="https://www.linkedin.com/in/nickbraver" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://flowcv.com/resume/sdl3925u2j" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Nick Braver. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
