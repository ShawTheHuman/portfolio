
import React, { useState } from 'react'
import ProjectList from '../components/ProjectList'
import ProjectModal from '../components/ProjectModal'
import projectDetails from '../data/projectDetails'
import '../styles/Home.css'

const Home = () => {
    const [activeProjectId, setActiveProjectId] = useState(null);
    const [originRect, setOriginRect] = useState(null);

    const handleOpenProject = (projectId, rect) => {
        setOriginRect(rect);
        setActiveProjectId(projectId);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const handleClosePanel = () => {
        setActiveProjectId(null);
        document.body.style.overflow = ''; // Restore scrolling
    };

    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Nick<br />Braver</h1>
                <p className="home-subheader">Designing digital products with B2B, B2C e-commerce companies and startups since 2014.</p>
            </header>

            <ProjectList onOpenProject={handleOpenProject} />

            {activeProjectId && (
                <ProjectModal
                    projectData={projectDetails[activeProjectId]}
                    onClose={handleClosePanel}
                    originRect={originRect}
                />
            )}
        </div>
    )
}

export default Home

