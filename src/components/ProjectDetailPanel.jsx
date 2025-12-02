import React, { useEffect, useRef, useState } from 'react'
import '../styles/ProjectDetailPanel.css'
import analytics from '../utils/analytics'

const ProjectDetailPanel = ({ projectData, isOpen, isCollapsed, isLoading, loadingMessages, onToggleCollapse, onClose }) => {
    const panelRef = useRef(null);
    const openTimeRef = useRef(null);
    const [visibleLoadingMessages, setVisibleLoadingMessages] = useState([]);

    useEffect(() => {
        if (isOpen && !isCollapsed) {
            openTimeRef.current = Date.now();
            analytics.log('detail_panel_opened', { projectId: projectData?.id });
        }

        return () => {
            if (openTimeRef.current) {
                const duration = Date.now() - openTimeRef.current;
                analytics.log('detail_panel_closed', {
                    projectId: projectData?.id,
                    durationMs: duration
                });
            }
        };
    }, [isOpen, isCollapsed, projectData]);

    // Progressive disclosure of loading messages
    useEffect(() => {
        const timers = [];
        if (isLoading && loadingMessages.length > 0) {
            setVisibleLoadingMessages([]);

            loadingMessages.forEach((msg, index) => {
                const timer = setTimeout(() => {
                    setVisibleLoadingMessages(prev => [...prev, msg]);
                }, index * 600); // Show each message 600ms apart
                timers.push(timer);
            });
        } else {
            setVisibleLoadingMessages([]);
        }

        return () => {
            timers.forEach(timer => clearTimeout(timer));
        };
    }, [isLoading, loadingMessages]);

    const handleScroll = (e) => {
        const element = e.target;
        const scrollPercentage = (element.scrollTop / (element.scrollHeight - element.clientHeight)) * 100;

        if (scrollPercentage > 25 && scrollPercentage < 30) {
            analytics.log('detail_panel_scrolled', {
                projectId: projectData?.id,
                depth: '25%'
            });
        }
    };

    const handleLinkClick = (link) => {
        analytics.log('detail_panel_link_clicked', {
            projectId: projectData?.id,
            linkUrl: link.url
        });
    };

    if (!projectData && !isLoading) return null;

    return (
        <>
            {/* Collapsed Tab Handle */}
            {isCollapsed && isOpen && (
                <div className="detail-panel-tab" onClick={onToggleCollapse}>
                    <div className="detail-panel-tab-content">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        <span className="detail-panel-tab-text">{projectData?.title || 'Project Details'}</span>
                    </div>
                </div>
            )}

            {/* Full Detail Panel */}
            <div
                className={`detail-panel ${isOpen ? 'open' : ''} ${isCollapsed ? 'collapsed' : ''}`}
                ref={panelRef}
                onScroll={handleScroll}
            >
                <div className="detail-panel-header">
                    <button className="detail-panel-toggle" onClick={onToggleCollapse} title={isCollapsed ? "Expand panel" : "Collapse panel"}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            {isCollapsed ? (
                                <polyline points="15 18 9 12 15 6"></polyline>
                            ) : (
                                <polyline points="9 18 15 12 9 6"></polyline>
                            )}
                        </svg>
                    </button>
                    <button className="detail-panel-close" onClick={onClose} title="Close panel">
                        <span>Close</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                <div className="detail-panel-content">
                    {/* Loading State - ChatGPT Style */}
                    {isLoading && (
                        <div className="detail-panel-loading">
                            <div className="loading-container">
                                <div className="loading-header">
                                    <div className="loading-spinner"></div>
                                    <span className="loading-title">Loading project details...</span>
                                </div>
                                <div className="loading-messages">
                                    {visibleLoadingMessages.map((msg, index) => (
                                        <div key={index} className="loading-message">
                                            <svg className="loading-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            <span>{msg}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Regular Content - Only show when not loading */}
                    {!isLoading && projectData && (
                        <>
                            {/* Hero Image */}
                            {projectData.hero && (
                                <div className="detail-hero">
                                    <img src={projectData.hero} alt={projectData.title} />
                                </div>
                            )}

                            {/* Header */}
                            <div className="detail-header">
                                <div className="detail-meta">
                                    <span className="detail-company">{projectData.company}</span>
                                    <span className="detail-separator">·</span>
                                    <span className="detail-year">{projectData.year}</span>
                                </div>
                                <h1 className="detail-title">{projectData.title}</h1>
                                <p className="detail-role">{projectData.role} · {projectData.team}</p>

                                {projectData.tags && (
                                    <div className="detail-tags">
                                        {projectData.tags.map((tag, index) => (
                                            <span key={index} className="detail-tag">{tag}</span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Overview */}
                            {projectData.overview && (
                                <section className="detail-section">
                                    <h2>Overview</h2>
                                    <p className="detail-text-large">{projectData.overview}</p>
                                </section>
                            )}

                            {/* Problem */}
                            {projectData.problem && (
                                <section className="detail-section">
                                    <h2>The Problem</h2>
                                    <p>{projectData.problem}</p>
                                </section>
                            )}

                            {/* Solution */}
                            {projectData.solution && (
                                <section className="detail-section">
                                    <h2>The Solution</h2>
                                    <p>{projectData.solution}</p>
                                </section>
                            )}

                            {/* Key Features */}
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

                            {/* Impact */}
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

                            {/* Process */}
                            {projectData.process && projectData.process.length > 0 && (
                                <section className="detail-section">
                                    <h2>Process</h2>
                                    <ul className="detail-list">
                                        {projectData.process.map((step, index) => (
                                            <li key={index} className="process-step-rich">
                                                <div className="process-step-content">
                                                    <p className="process-step-description">{step.description}</p>
                                                    {step.media && step.media.length > 0 && (
                                                        <div className="process-media-grid">
                                                            {step.media.map((item, mIndex) => (
                                                                <div key={mIndex} className={`process-media-item ${item.type}`}>
                                                                    {item.type === 'video' ? (
                                                                        <video
                                                                            src={item.url}
                                                                            controls
                                                                            playsInline
                                                                            className="process-video"
                                                                            poster={item.poster}
                                                                        />
                                                                    ) : (
                                                                        <img
                                                                            src={item.url}
                                                                            alt={item.caption || `Process step ${index + 1} image ${mIndex + 1}`}
                                                                            className="process-image"
                                                                        />
                                                                    )}
                                                                    {item.caption && <span className="process-media-caption">{item.caption}</span>}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {/* Launched Section */}
                            {projectData.launched && projectData.launched.length > 0 && (
                                <section className="detail-section">
                                    <h2>Launched</h2>
                                    <ul className="detail-list">
                                        {projectData.launched.map((step, index) => (
                                            <li key={index} className="process-step-rich">
                                                <div className="process-step-content">
                                                    <p className="process-step-description">{step.description}</p>
                                                    {step.media && step.media.length > 0 && (
                                                        <div className="process-media-grid">
                                                            {step.media.map((item, mIndex) => (
                                                                <div key={mIndex} className={`process-media-item ${item.type}`}>
                                                                    {item.type === 'video' ? (
                                                                        <video
                                                                            src={item.url}
                                                                            controls
                                                                            playsInline
                                                                            className="process-video"
                                                                            poster={item.poster}
                                                                        />
                                                                    ) : (
                                                                        <img
                                                                            src={item.url}
                                                                            alt={item.caption || `Launched step ${index + 1} image ${mIndex + 1}`}
                                                                            className="process-image"
                                                                        />
                                                                    )}
                                                                    {item.caption && <span className="process-media-caption">{item.caption}</span>}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            )}

                            {/* Testimonials */}
                            {projectData.testimonials && projectData.testimonials.length > 0 && (
                                <section className="detail-section">
                                    <h2>Testimonials</h2>
                                    {projectData.testimonials.map((testimonial, index) => (
                                        <blockquote key={index} className="detail-testimonial">
                                            <p>"{testimonial.quote}"</p>
                                            <cite>— {testimonial.author}, {testimonial.title}</cite>
                                        </blockquote>
                                    ))}
                                </section>
                            )}

                            {/* Links */}
                            {projectData.links && projectData.links.length > 0 && (
                                <section className="detail-section">
                                    <h2>Links</h2>
                                    <div className="detail-links">
                                        {projectData.links.map((link, index) => (
                                            <a
                                                key={index}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="detail-link"
                                                onClick={() => handleLinkClick(link)}
                                            >
                                                <div className="detail-link-label">
                                                    {link.label}
                                                </div>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                    <polyline points="15 3 21 3 21 9"></polyline>
                                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                                </svg>
                                            </a>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProjectDetailPanel;
