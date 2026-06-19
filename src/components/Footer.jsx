import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Footer.css'
import LifeInsurance from '../assets/healthcare.png'
import HealthInsurance from '../assets/health-insurance.png'
import TermsInsurance from '../assets/short-term.png'
import MotorInsurance from '../assets/car.png'
import TravelInsurance from '../assets/insurance.png'
import MutualFunds from '../assets/sell.png'
import phone from '../assets/phone-call.png'
import whatsapp from '../assets/whatsapp.png'
import email from '../assets/email.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-main-contents">
                <div className='headings'>
                    <h3>Jay Consultancy</h3>
                    <p>Professional Investment Analyst <br />& Insurance Advisor</p>
                </div>
                <div className='quick-links'>
                    <h5>Quick Links</h5>
                    <div className='footer-links'>
                        <Link className='link' to='/'>Home</Link>
                        <Link className='link' to='/about'>About</Link>
                        <Link className='link' to='/services'>Services</Link>
                        <Link className='link' to='/investments'>Investments</Link>
                        <Link className='link' to='/contact'>Contact Us</Link>
                    </div>
                </div>
                <div className='services'>
                    <h5>Our Services</h5>
                    <ul className='services-list'>
                        <li><span><img className='icons' src={LifeInsurance} alt="LifeInsurance" /></span>Life Insurance</li>
                        <li><span><img className='icons' src={HealthInsurance} alt="HealthInsurance" /></span>Health Insurance</li>
                        <li><span><img className='icons' src={TermsInsurance} alt="TermsInsurance" /></span>Terms Insurance</li>
                        <li><span><img className='icons' src={MotorInsurance} alt="MotorInsurance" /></span>Motor Insurance</li>
                        <li><span><img className='icons' src={TravelInsurance} alt="TravelInsurance" /></span>Travel Insurance</li>
                        <li><span><img className='icons' src={MutualFunds} alt="MutualFunds" /></span>SIP & Mutual Funds</li>
                    </ul>
                </div>
                <div className='contact-info'>
                    <h5>Contact Info</h5>
                    <ul className='contact-list'>
                        <li><span><img className='icons' src={phone} alt="phone" /></span>+91 63561 30955</li>
                        <li><span><img className='icons' src={whatsapp} alt="whatsapp" /></span>+91 9924412847</li>
                        <li><span><img className='icons' src={email} alt="email" /></span>jayconsultancy@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className='footer-line'>
                <p>©2026 <span><Link className='link' to='/'>Jay Consultancy</Link></span>. All Right Reserved.</p>
                <div className='policy'>
                    <Link className='link' to='/privatepolicy'>Private Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer
