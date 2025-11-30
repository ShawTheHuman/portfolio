import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WorkOverlay from './components/WorkOverlay'
import Home from './pages/Home'
import BudgetTiers from './pages/BudgetTiers'
import Activations from './pages/Activations'
import Jet from './pages/Jet'
import Splunk from './pages/Splunk'
import Indeed from './pages/Indeed'

function App() {
    const [isWorkOverlayOpen, setIsWorkOverlayOpen] = useState(false)

    const toggleWorkOverlay = () => {
        setIsWorkOverlayOpen(!isWorkOverlayOpen)
    }

    return (
        <Router>
            <div className="app-container">
                <Header onWorkClick={toggleWorkOverlay} />
                <WorkOverlay
                    isOpen={isWorkOverlayOpen}
                    onClose={() => setIsWorkOverlayOpen(false)}
                />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/budget-tiers" element={<BudgetTiers />} />
                        <Route path="/activations" element={<Activations />} />
                        <Route path="/jet" element={<Jet />} />
                        <Route path="/splunk" element={<Splunk />} />
                        <Route path="/indeed" element={<Indeed />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
