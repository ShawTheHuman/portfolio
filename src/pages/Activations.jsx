import React from 'react'
import ProjectDetail from '../components/ProjectDetail'

const Activations = () => {
    return (
        <ProjectDetail
            title="Creating campaign activation moments"
            year="2023"
            company="Indeed"
            role="Monetization & Growth"
        >
            <h5>Indeed - Monetization & Growth team</h5>
            <p>
                After our Campaigns product was launched we needed to improve the visibility for the product and drive users to successfully create more campaigns. I was tasked with explaining the new concept in a clear and concise format that would entice users to sign up.
            </p>

            <h2>Delivering on OKR's</h2>

            <div className="stat-grid">
                <div className="stat-item">
                    <h2>&gt; $36M</h2>
                    <h5>Annualized revenue</h5>
                </div>
                <div className="stat-item">
                    <h2>16,000</h2>
                    <h5>Campaigns created</h5>
                </div>
                <div className="stat-item">
                    <h2>34,000</h2>
                    <h5>Jobs sponsored</h5>
                </div>
            </div>
        </ProjectDetail>
    )
}

export default Activations
