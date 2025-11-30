import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <span className="hero-subtitle animate-fade-in-up delay-100">Product Designer</span>
                <h1 className="hero-title animate-fade-in-up delay-200">
                    Designing digital products with B2B, B2C e-commerce companies and startups since 2014.
                </h1>
                <div className="hero-actions animate-fade-in-up delay-300">
                    <a href="#work" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        View Work
                    </a>
                    <a href="https://www.linkedin.com/in/nickbraver" className="btn btn-secondary">
                        Connect With Me
                    </a>
                </div>
            </div>
            <div className="hero-image-container animate-fade-in delay-200">
                <div className="hero-image"></div>
            </div>
        </section>
    )
}

export default Hero
