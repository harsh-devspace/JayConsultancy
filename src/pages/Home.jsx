import React from 'react'
import '../css/Home.css'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import lifeInsurance from '../assets/life-insurance.png'
import healthInsurance from '../assets/health.png'
import motorInsurance from '../assets/protection.png'
import travelInsurance from '../assets/travel-insurance.png'
import termsInsurance from '../assets/policy.png'
import mutualFunds from '../assets/investment.png'
import advisor from '../assets/operator.png'
import planning from '../assets/wealth.png'
import guidance from '../assets/guide.png'
import claim from '../assets/claim.png'
import aboutPhoto from '../assets/about-photo.jpeg'
import contactBg from '../assets/contact-info.png'

const Home = () => {
  const services = [
    {
      icon: lifeInsurance,
      title: 'Life Insurance',
      description: 'Life insurance provides financial security to your family in case of unforeseen events.',
      features: ['Family Protection', 'Financial Security', 'Long-Term Planning']
    },
    {
      icon: healthInsurance,
      title: 'Health Insurance',
      description: 'Medical emergencies can happen anytime. Health insurance protects you from rising healthcare expenses.',
      features: ['Cashless Hospitalization', 'Financial Protection', 'Family Coverage']
    },
    {
      icon: motorInsurance,
      title: 'Motor Insurance',
      description: 'Protect your vehicle against accidents, theft, and damages.',
      features: ['Third Party Coverage', 'Own Damage Protection', 'Peace of Mind']
    },
    {
      icon: travelInsurance,
      title: 'Travel Insurance',
      description: 'Enjoy your trips with comprehensive travel protection.',
      features: ['Medical Emergency Coverage', 'Trip Cancellation Protection', 'Baggage Protection']
    },
    {
      icon: termsInsurance,
      title: 'Terms Insurance',
      description: 'Affordable life coverage with high protection benefits.',
      features: ['High Coverage', 'Low Premium', 'Family Security']
    },
    {
      icon: mutualFunds,
      title: 'SIP & Mutual Funds',
      description: 'Invest regularly and grow your wealth over time.',
      features: ['Disciplined Investing', 'Compounding Growth', 'Goal-Based Investing']
    }
  ]

  return (
    <div className='container'>
      <Hero />

      <div className='services-overview'>
        <div className='services-overview-headings'>
          <h5>Our Services</h5>
          <p>Comprehension solution for your prosperity and protection</p>
        </div>
        <div className='services-overview-sections'>
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} features={service.features} />
          ))}
        </div>
      </div>

      <div className='trust-section'>
        <h5>Why Choose Jay Consultancy?</h5>
        <div className='trust-overview-sections'>
          <div className='trust-overview-section-1 visitor'>
            <img src={advisor} alt="advisor" />
            <div className='trust-description'>
              <h6>Experienced Advisor</h6>
              <p>Years of expertise in insurance and investment planning.</p>
            </div>
          </div>
          <div className='trust-overview-section-2 visitor'>
            <img src={planning} alt="planning" />
            <div className='trust-description'>
              <h6>Personalized Financial Planning</h6>
              <p>Solutions tailored to your financial goals.</p>
            </div>
          </div>
          <div className='trust-overview-section-3 visitor'>
            <img src={guidance} alt="guidance" />
            <div className='trust-description'>
              <h6>Trusted Insurance Guidance</h6>
              <p>Transparent advice to choose the right coverage.</p>
            </div>
          </div>
          <div className='trust-overview-section-4 visitor'>
            <img src={claim} alt="claim" />
            <div className='trust-description'>
              <h6>Quick Claim Assistance</h6>
              <p>Dedicated support throughout the claim process.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='about-advisor'>
        <img src={aboutPhoto} alt="advisor-photo" />
        <div className='advisor-details'>
          <h4>Mr. Dinesh Prajapati</h4>
          <h6>Professional Investment Analyst & Insurance Advisor</h6>
          <p>With years of experience in insurance advisory and investment planning, we help clients make informed financial decisions that align with their goals, risk profile, and future aspirations.</p>
          <ul>
            <li><span>✓</span> Expert in Insuarnce Planning</li>
            <li><span>✓</span> SIP & Mutual Funds Specialist</li>
            <li><span>✓</span> Retirement Planning</li>
            <li><span>✓</span> Risk Management Expert</li>
          </ul>
          <button className='know-more'>Know More About Us</button>
        </div>
      </div>

      <div className='hero-contact-info'>
        <img src={contactBg} alt="contact-info" />
        <div className='hero-contact-details'>
          <div className='contact-headings'>
            <h4>Ready to Plan Your Financial Future</h4>
            <h6>Contact Jay Consultancy today for a personalized consultation.</h6>
            <div className='contact-btn'>
              <button className='contact-consultation'>Get Free Consultation</button>
              <button className='contact-whatsapp-now'>WhatsApp Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
