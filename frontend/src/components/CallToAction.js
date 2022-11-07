import React from 'react'
import "./CallToAction.css"
import { FiCode } from 'react-icons/fi'

function CallToAction() {
    return (
        <div className="cta-bg">
            <div className="overlay"></div>
            <div className="container">
                <div className="cta-text">
                    <FiCode className="FiCode" />
                    <h2>We're react dev team</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse voluptatem dolores atque asperiores maxime blanditiis, quos natus consequatur adipisci quaerat praesentium neque tempora rem deserunt iste, nam quisquam provident!</p>
                    <a href="#" className="cta-btn">get to know us</a>
                </div>
            </div>
        </div>
    )
}

export default CallToAction