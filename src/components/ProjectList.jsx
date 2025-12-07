
import React from 'react';
import projectDetails from '../data/projectDetails';
import '../styles/ProjectList.css';

const ProjectList = ({ onOpenProject }) => {
    // Convert projectDetails object to array and sort by year (descending)
    const sortedProjects = Object.values(projectDetails).sort((a, b) => {
        return b.year - a.year;
    });

    return (
        <section className="portfolio-list-section">
            <div
                className="portfolio-list-grid"
                onMouseMove={(e) => {
                    const cards = document.getElementsByClassName('project-card');
                    for (const card of cards) {
                        const rect = card.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        card.style.setProperty('--mouse-x', `${x}px`);
                        card.style.setProperty('--mouse-y', `${y}px`);
                    }
                }}
            >
                {sortedProjects.map((project) => (
                    <div
                        key={project.id}
                        className="project-card"
                        onClick={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            onOpenProject(project.id, rect);
                        }}
                    >
                        <div className="project-image-container">
                            <img src={project.hero} alt={project.title} className="project-image" />
                            <div className="project-overlay">
                                <span className="view-project-btn">View Case Study</span>
                            </div>
                        </div>
                        <div className="project-info">
                            <div className="project-meta-top">
                                <span className="project-company">{project.company}</span>
                                <span className="project-year">{project.year}</span>
                            </div>
                            <h3>{project.title}</h3>
                            <p className="project-role">{project.role}</p>
                            <p className="project-overview">{project.overview}</p>
                            <div className="project-tags">
                                {project.tags && project.tags.map((tag, index) => (
                                    <span key={index} className="project-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectList;
