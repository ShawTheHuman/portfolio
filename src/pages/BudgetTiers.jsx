import React from 'react'
import ProjectDetail from '../components/ProjectDetail'
import budgetTiersUI from '../assets/budget_tiers_ui.png'

const BudgetTiers = () => {
    return (
        <ProjectDetail
            title="Improving Sponsorship rates with budget tiers"
            year="2024"
            company="Indeed"
            role="Monetization & Growth"
        >
            <h5>Indeed Budget Tiers</h5>
            <p>
                Our research team found a common thread in user feedback that showed customers wanted more information around how much they needed to spend to fill a role as soon as possible. We created a budget tiers framework after multiple rounds of user testing and iterations. Led to a $65M+ annualized revenue win. Launched in June of 2024.
            </p>

            <img src={budgetTiersUI} alt="Indeed budget tiers interface" className="project-image" />

            <div className="stat-grid">
                <div className="stat-item">
                    <h2>$65M+</h2>
                    <h5>Annualized revenue win</h5>
                </div>
                <div className="stat-item">
                    <h2>US & JP</h2>
                    <h5>Markets</h5>
                </div>
            </div>

            <blockquote>
                <p>
                    "…We had to explain the complexity of our product in just a few pages, and Nick took that challenge to heart and kept focused on building an experience that is simple, beautiful, and informative. Several of his designs led to major wins for our user experience (and key related business metrics, like revenue and retention)…"
                </p>
                <cite>— Prashant Patel, Product Manager @ Indeed</cite>
            </blockquote>
        </ProjectDetail>
    )
}

export default BudgetTiers
