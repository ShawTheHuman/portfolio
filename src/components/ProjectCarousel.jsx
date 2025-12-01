import React, { useRef } from 'react';
import '../styles/ProjectCarousel.css';

const ProjectCarousel = ({ items, onItemClick }) => {
    const scrollContainerRef = useRef(null);

    const handleScroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300; // Approx card width
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="project-carousel-container">
            <div className="project-carousel-scroll" ref={scrollContainerRef}>
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="project-card"
                        onClick={() => onItemClick(item)}
                    >
                        <div className="project-card-image-container">
                            {item.image ? (
                                <img src={item.image} alt={item.label} className="project-card-image" />
                            ) : (
                                <div className="project-card-placeholder">
                                    <span>{item.icon}</span>
                                </div>
                            )}
                        </div>
                        <div className="project-card-content">
                            <h3 className="project-card-title">{item.title || item.label}</h3>
                            {item.tags && (
                                <div className="project-card-tags">
                                    {item.tags.map((tag, index) => (
                                        <span key={index} className="project-card-tag">{tag}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <button
                className="carousel-nav prev"
                onClick={() => handleScroll('left')}
                aria-label="Previous projects"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>

            <button
                className="carousel-nav next"
                onClick={() => handleScroll('right')}
                aria-label="Next projects"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        </div>
    );
};

export default ProjectCarousel;
