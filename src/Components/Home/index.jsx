import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroText'
import About from './aboutSection'
export default function Index() {
    return (
        <React.Fragment>
           
            <div className="hero-section">
                <Navbar/>
                <HeroSection/>

                <div className="about-QCOIN-home">
                    <h1 className="k68s">WHY <span> QCOIN?</span></h1>

                    <About />

                </div>
            </div>
            
        </React.Fragment>
    )
}
