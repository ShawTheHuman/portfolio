import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/ProjectDetail.css'

const ProjectDetail = ({ children, title, year, company, role }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="project-detail animate-fade-in-up">
            <div className="project-header">
                <Link to="/" className="back-link">← Back to timeline</Link>
                <h1 className="project-title-large">{title}</h1>
                <div className="project-meta">
                    <div className="meta-item">
                        <span className="meta-label">Year</span>
                        <span className="meta-value">{year}</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-label">Company</span>
                        <span className="meta-value">{company}</span>
                    </div>
                    {role && (
                        <div className="meta-item">
                            <span className="meta-label">Role</span>
                            <span className="meta-value">{role}</span>
                        </div>
                    )}
                </div>
            </div>
            <div className="project-content">
                {children}
            </div>
            <div className="project-footer">
                <Link to="/" className="back-link">← Back to timeline</Link>
            </div>
        </div>
    )
}

export default ProjectDetail
