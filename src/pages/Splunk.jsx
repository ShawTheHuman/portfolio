import React from 'react'
import ProjectDetail from '../components/ProjectDetail'
import splunkAudit from '../assets/splunk_design_audit.png'
import splunkComponents from '../assets/splunk_components.png'
import splunkFramework from '../assets/splunk_framework.png'

const Splunk = () => {
    return (
        <ProjectDetail
            title="Building an enterprise mobile design system"
            year="2020"
            company="Handsome / Splunk"
            role="Lead Product Designer"
        >
            <h2>Background</h2>
            <p>
                While working for Handsome, a client (Splunk) approached us to develop a strategy for a mobile design system that would span across 13 enterprise applications. I was the lead product designer responsible for auditing the current mobile applications, developing a system of components.
            </p>

            <h3>Current App Design Audit</h3>
            <p>
                I outlined a process of auditing the current mobile applications by breaking down each app and organizing by primitives (colors, font sizes, etc.), components, and pages. The first step was to do a high-level audit, identifying patterns and styles across all mobile applications in the company.
            </p>

            <img src={splunkAudit} alt="Splunk design system audit" className="project-image" />

            <h3>Building a Framework</h3>
            <p>
                Our next goal was to build out a framework that would be the blueprint for the new design system. We were conscious about accessibility, making a requirement for all elements (colors, fonts, etc.) to be WCAG 2.1 AA compliant.
            </p>

            <img src={splunkFramework} alt="Splunk design system framework" className="project-image" />

            <p>
                Below is a snapshot of the framework with detailed documentation showing foundational elements. Once the components were documented for designers, we began to document the interactions for those components.
            </p>

            <img src={splunkComponents} alt="Splunk component documentation" className="project-image" />

            <h2>Results</h2>
            <div className="stat-grid">
                <div className="stat-item">
                    <h2>100%</h2>
                    <h5>WCAG 2.1 AA compliance</h5>
                </div>
                <div className="stat-item">
                    <h2>12</h2>
                    <h5>Design teams utilizing system</h5>
                </div>
                <div className="stat-item">
                    <h2>120</h2>
                    <h5>Pages of documentation</h5>
                </div>
            </div>
        </ProjectDetail>
    )
}

export default Splunk
