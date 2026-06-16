import React from 'react'
import '../css/Hero.css'
import heroImg from '../assets/hero-img2.png'

const Hero = () => {
    return (
        <div className='hero-section'>
            <div className='hero-main-content'>
                <div className='heading'>
                    <h1>Secure Your Future with<br /> Expert <span className='insurance-text' style={{ color: '#0d2d72' }}>Insurance &<br /></span> <span className='investment-text' style={{ color: '#D4AF37' }}>Investment Guidance</span></h1>
                </div>
                <div className='subheading'>
                    <p>Jay Consultancy helps individuals and families protect their future through insurance solutions and smart investment planning. Get expert advice on Life Insurance, Health Insurance, Motor Insurance, Travel Insurance, Term Insurance, SIPs, and Mutual Funds.</p>
                </div>
                <div className='hero-buttons'>
                    <button className='btn consultation'>Get Free Consultation</button>
                    <button className='btn whatsapp-now'>WhatsApp Now</button>
                    <button className='btn call-now'>Call Now</button>
                </div>
            </div>

            <div className='hero-image'>
                <img src={heroImg} alt="hero-img" />
            </div>
        </div>
    )
}

export default Hero
