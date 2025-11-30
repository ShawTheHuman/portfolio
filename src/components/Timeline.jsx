import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Timeline.css'

import digitalPowerPacksImg from '../assets/digital_power_packs_bg.png'

const experience = [
    {
        year: '2025',
        role: 'Lead Product Designer',
        company: 'GameStop',
        details: 'eCom, Special Projects, Store Tools',
        works: [
            {
                title: 'Digital PowerPacks',
                year: '2025',
                link: 'https://www.linkedin.com/feed/update/urn:li:activity:7391942200911110144/',
                external: true,
                type: 'link',
                featured: true,
                image: digitalPowerPacksImg,
                description: 'Digital packs, physical cards. Rip packs on-demand to reveal PSA slabs.'
            }
        ]
    },
    {
        year: '2024',
        role: 'Senior Product Designer',
        company: 'Indeed',
        details: 'Monetization & Growth',
        works: [
            {
                title: 'Sponsoring a job',
                year: '2024',
                link: '/budget-tiers',
                external: false,
                type: 'case-study'
            },
            {
                title: 'Creating a campaign',
                year: '2023',
                link: '/activations',
                external: false,
                type: 'case-study'
            }
        ]
    },
    {
        year: '2021',
        role: 'Senior Product Designer',
        company: 'Indeed',
        details: 'Design systems',
        works: [
            {
                title: 'Helping Mid-market employers',
                year: '2022',
                link: '/indeed',
                external: false,
                type: 'case-study'
            }
        ]
    },
    {
        year: '2020',
        role: 'Product Designer',
        company: 'Handsome',
        details: 'Enterprise design system',
        works: [
            {
                title: 'Enterprise design system',
                year: '2020',
                link: '/splunk',
                external: false,
                type: 'case-study'
            }
        ]
    },
    {
        year: '2017',
        role: 'Product Designer',
        company: 'Jet.com',
        details: 'Android & iOS',
        works: [
            {
                title: 'Grocery shopping experience',
                year: '2018',
                link: '/jet',
                external: false,
                type: 'case-study'
            }
        ]
    },
    {
        year: '2016',
        role: 'UX/UI Designer',
        company: 'Nike, Anheuser-Busch, Polaris, Audi',
        details: 'Agency Work',
        works: []
    },
    {
        year: '2015',
        role: 'Interaction Designer',
        company: 'Checkout & Payments',
        details: '',
        works: []
    },
    {
        year: '2014',
        role: 'Web Designer',
        company: 'ICESAT-2 Satellite public website',
        details: '',
        works: []
    }
]

const LinkIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
)

const FileIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
)

const Timeline = () => {
    return (
        <section id="experience" className="timeline-section">
            <h2 className="section-title">Experience & Selected Works</h2>
            <div className="timeline-container">
                <div className="timeline-line"></div>
                {experience.map((item, index) => (
                    <div key={index} className="timeline-item animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <span className="timeline-year">{item.year}</span>
                                <h3 className="timeline-role">{item.role}</h3>
                                <div className="timeline-company">{item.company}</div>
                                {item.details && <div className="timeline-details">{item.details}</div>}
                            </div>

                            {item.works.length > 0 && (
                                <div className="timeline-works">
                                    {item.works.map((work, wIndex) => (
                                        <React.Fragment key={wIndex}>
                                            {work.featured ? (
                                                <a href={work.link} target="_blank" rel="noopener noreferrer" className="work-item featured">
                                                    <div className="work-bg" style={{ backgroundImage: `url(${work.image})` }}></div>
                                                    <div className="work-overlay"></div>
                                                    <div className="work-content">
                                                        <span className="work-type">New Product Launch</span>
                                                        <h4 className="work-title">{work.title}</h4>
                                                        <p className="work-desc">{work.description}</p>
                                                    </div>
                                                </a>
                                            ) : work.external ? (
                                                <a href={work.link} target="_blank" rel="noopener noreferrer" className="work-item">
                                                    <div className="work-icon">
                                                        <LinkIcon />
                                                    </div>
                                                    <div className="work-info">
                                                        <span className="work-title">{work.title}</span>
                                                        <span className="work-type">External Link</span>
                                                    </div>
                                                </a>
                                            ) : (
                                                <Link to={work.link} className="work-item">
                                                    <div className="work-icon">
                                                        <FileIcon />
                                                    </div>
                                                    <div className="work-info">
                                                        <span className="work-title">{work.title}</span>
                                                        <span className="work-type">Case Study</span>
                                                    </div>
                                                </Link>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Timeline
