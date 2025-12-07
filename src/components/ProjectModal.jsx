import React, { useLayoutEffect, useState, useRef, useEffect } from 'react';
import '../styles/ProjectModal.css';

const ProjectModal = ({ projectData, onClose, originRect }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const panelRef = useRef(null);

    // Initial positioning and expansion animation
    useLayoutEffect(() => {
        if (originRect && panelRef.current) {
            // Set initial position to match the card
            const el = panelRef.current;
            el.style.top = `${originRect.top}px`;
            el.style.left = `${originRect.left}px`;
            el.style.width = `${originRect.width}px`;
            el.style.height = `${originRect.height}px`;
            el.style.borderRadius = '24px';

            // Force reflow
            // void el.offsetWidth;

            // Trigger expansion in next frame
            requestAnimationFrame(() => {
                setIsExpanded(true);
            });
        }
    }, [originRect]);

    const handleClose = () => {
        setIsClosing(true);
        setIsExpanded(false); // Trigger reverse animation

        // Wait for animation to finish before unmounting
        setTimeout(() => {
            onClose();
        }, 500); // Match CSS transition duration
    };

    if (!projectData) return null;

    return (
        <div
            ref={panelRef}
            className={`detail-panel ${isExpanded ? 'expanded' : ''} ${isClosing ? 'closing' : ''}`}
        >
            <button className="close-btn" onClick={handleClose}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>

            <div className={`panel-content ${isExpanded ? 'visible' : ''}`}>
                {/* Hero Image */}
                {projectData.hero && (
                    <div className="detail-hero">
                        <img src={projectData.hero} alt={projectData.title} />
                    </div>
                )}

                <div className="content-container">
                    <div className="detail-header">
                        <div className="detail-meta">
                            <span className="detail-company">{projectData.company}</span>
                            <span className="detail-separator">·</span>
                            <span className="detail-year">{projectData.year}</span>
                        </div>
                        <h1>{projectData.title}</h1>
                        <p className="detail-role">{projectData.role} · {projectData.team}</p>

                        {projectData.tags && (
                            <div className="detail-tags">
                                {projectData.tags.map((tag, index) => (
                                    <span key={index} className="detail-tag">{tag}</span>
                                ))}
                            </div>
                        )}

                        {projectData.links && (
                            <div className="detail-links">
                                {projectData.links.map((link, index) => (
                                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="detail-link">
                                        {link.label}
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {projectData.overview && (
                        <section className="detail-section">
                            <h2>Overview</h2>
                            <p className="detail-text-large">{projectData.overview}</p>
                        </section>
                    )}

                    {projectData.problem && (
                        <section className="detail-section">
                            <h2>The Problem</h2>
                            <p>{projectData.problem}</p>
                        </section>
                    )}

                    {projectData.solution && (
                        <section className="detail-section">
                            <h2>The Solution</h2>
                            <p>{projectData.solution}</p>
                        </section>
                    )}

                    {projectData.features && projectData.features.length > 0 && (
                        <section className="detail-section">
                            <h2>Key Features</h2>
                            <ul className="detail-list">
                                {projectData.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {projectData.impact && projectData.impact.length > 0 && (
                        <section className="detail-section">
                            <h2>Impact</h2>
                            <div className="detail-impact-grid">
                                {projectData.impact.map((item, index) => (
                                    <div key={index} className="detail-impact-item">
                                        <div className="detail-impact-metric">{item.metric}</div>
                                        <div className="detail-impact-label">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {projectData.process && projectData.process.length > 0 && (
                        <section className="detail-section">
                            <h2>Process</h2>
                            <div className="detail-process-list">
                                {projectData.process.map((step, index) => (
                                    <div key={index} className="detail-process-item">
                                        <p>{step.description}</p>
                                        {step.media && step.media.length > 0 && (
                                            <div className="detail-process-media">
                                                {step.media.map((media, mIndex) => (
                                                    <div key={mIndex} className="process-media-item">
                                                        {media.type === 'video' ? (
                                                            <video src={media.url} controls muted loop />
                                                        ) : (
                                                            <img src={media.url} alt={media.caption || 'Process image'} />
                                                        )}
                                                        {media.caption && <span className="media-caption">{media.caption}</span>}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {projectData.launched && projectData.launched.length > 0 && (
                        <section className="detail-section">
                            <h2>Launched</h2>
                            <div className="detail-process-list">
                                {projectData.launched.map((step, index) => (
                                    <div key={index} className="detail-process-item">
                                        <p>{step.description}</p>
                                        {step.media && step.media.length > 0 && (
                                            <div className="detail-process-media">
                                                {step.media.map((media, mIndex) => (
                                                    <div key={mIndex} className="process-media-item">
                                                        {media.type === 'video' ? (
                                                            <video src={media.url} controls muted loop />
                                                        ) : (
                                                            <img src={media.url} alt={media.caption || 'Launch image'} />
                                                        )}
                                                        {media.caption && <span className="media-caption">{media.caption}</span>}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
