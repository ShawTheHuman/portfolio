import React from 'react'
import '../styles/Reviews.css'

const Reviews = () => {
    return (
        <section id="reviews" className="reviews-section">
            <h2 className="section-title">Reviews</h2>
            <div className="reviews-container">
                <div className="reviews-widget">
                    <iframe
                        src="https://adplist.org/widgets/reviews?src=nick-braver"
                        title="All Reviews"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        style={{ border: 0 }}
                    />
                </div>
            </div>
        </section>
    )
}

export default Reviews
