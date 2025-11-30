import React from 'react'
import ProjectDetail from '../components/ProjectDetail'

const Indeed = () => {
    return (
        <ProjectDetail
            title="Helping Mid-market employers"
            year="2022"
            company="Indeed"
            role="Product Designer"
        >
            <h2>Background</h2>
            <p>
                Mid-market employers often face high turnover and need to hire multiple people for the same role or have recurring hiring needs. However, the existing system wasn't serving them well. Job posts would get "moldy" after a week, losing traction and visibility.
            </p>
            <blockquote>
                "Our needs are so immediate that I’m finding that when a job posting is up, it gets moldy after about a week... I’m noticing after 7 days, not much is happening."
            </blockquote>

            <h3>The Opportunity</h3>
            <p>
                Our strategy and research team identified that multi-hire/recurring roles made up 53% of SMB jobs posted in September 2021. There was a potential $50M-$300M incremental revenue opportunity. The goal was to enhance the value "scaled employers" get from Indeed and improve their work-streams through simple, easy-to-use job management options.
            </p>

            <h2>Solution</h2>
            <p>
                We focused on building a self-serve experience that allows employers to:
            </p>
            <ul>
                <li><strong>Group jobs:</strong> Easily manage multiple jobs at once.</li>
                <li><strong>Shared budgets:</strong> Set a monthly budget that covers all jobs in a campaign.</li>
                <li><strong>Campaign management:</strong> A simple tool to sponsor multiple jobs under one budget.</li>
            </ul>

            <h2>Results</h2>
            <div className="stat-grid">
                <div className="stat-item">
                    <h2>16k+</h2>
                    <h5>Campaigns created</h5>
                </div>
                <div className="stat-item">
                    <h2>$36m</h2>
                    <h5>Revenue increase (Q4 2022)</h5>
                </div>
                <div className="stat-item">
                    <h2>87%</h2>
                    <h5>User satisfaction (3+)</h5>
                </div>
            </div>
        </ProjectDetail>
    )
}

export default Indeed
