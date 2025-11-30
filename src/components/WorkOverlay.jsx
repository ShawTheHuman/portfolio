import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/WorkOverlay.css'
import digitalPowerPacksImg from '../assets/digital_power_packs_bg_v2.png'
import budgetTiersImg from '../assets/budget_tiers_ui.png'
import jetNavFlow from '../assets/jet_navigation_flow_diagram.png'
import splunkFramework from '../assets/splunk_framework.png'

const projects = [
    {
        title: 'Digital Power Packs',
        subtitle: 'GameStop · 2025',
        description: 'Launching a new digital product for GameStop.',
        impact: '10M+ revenue per week',
        link: 'https://www.linkedin.com/feed/update/urn:li:activity:7391942200911110144/',
        image: digitalPowerPacksImg,
        size: 'large',
        external: true
    },
    {
        title: 'Budget Tiers',
        subtitle: 'Indeed · 2024',
        description: 'Improving sponsorship rates with intelligent budget recommendations',
        impact: '$65M+ annualized revenue',
        link: '/budget-tiers',
        image: budgetTiersImg
    },
    {
        title: 'Campaign Activations',
        subtitle: 'Indeed · 2023',
        description: 'Creating compelling activation moments to drive campaign adoption',
        impact: '$36M+ annualized revenue',
        link: '/activations',
        image: budgetTiersImg // Using same image since we hit quota
    },
    {
        title: 'Grocery Shopping Experience',
        subtitle: 'Jet.com · 2018',
        description: 'Redesigning mobile navigation to reduce friction and increase conversions',
        impact: '21% add-to-cart rate increase',
        link: '/jet',
        image: jetNavFlow
    },
    {
        title: 'Enterprise Design System',
        subtitle: 'Splunk · 2020',
        description: 'Building a comprehensive mobile design system across 13 applications',
        impact: '100% WCAG 2.1 AA compliant',
        link: '/splunk',
        image: splunkFramework
    }
]

const WorkOverlay = ({ isOpen, onClose }) => {
    // Handle ESC key to close
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose()
        }
        if (isOpen) {
            window.addEventListener('keydown', handleEsc)
            document.body.style.overflow = 'hidden'
        }
        return () => {
            window.removeEventListener('keydown', handleEsc)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className={`work-overlay ${isOpen ? 'open' : ''}`}>
            <button className="work-overlay-close" onClick={onClose} aria-label="Close work overlay">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>

            <div className="work-overlay-content">
                <h2 className="work-overlay-title">Selected Work</h2>

                <div className="work-projects">
                    {projects.map((project, index) => {
                        const Tag = project.external ? 'a' : Link
                        const props = project.external
                            ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
                            : { to: project.link, onClick: onClose }

                        return (
                            <Tag
                                key={index}
                                {...props}
                                className={`work-project-card ${project.size === 'large' ? 'large' : ''}`}
                                style={{
                                    animationDelay: `${index * 0.1}s`
                                }}
                            >
                                <div className="work-project-bg" style={{ backgroundImage: `url(${project.image})` }}></div>
                                <div className="work-project-overlay"></div>
                                <div className="work-project-content">
                                    <span className="work-project-subtitle">{project.subtitle}</span>
                                    <h3 className="work-project-title">{project.title}</h3>
                                    <p className="work-project-description">{project.description}</p>
                                    <span className="work-project-impact">{project.impact}</span>
                                </div>
                            </Tag>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default WorkOverlay
