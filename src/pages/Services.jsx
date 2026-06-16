import React from 'react'
import '../css/Services.css'
import lifeInsurance from '../assets/life-insurance.png'
import healthInsurance from '../assets/health.png'
import motorInsurance from '../assets/protection.png'
import travelInsurance from '../assets/travel-insurance.png'
import termsInsurance from '../assets/policy.png'
import mutualFunds from '../assets/investment.png'
import ServiceCard from '../components/ServiceCard'

const Services = () => {

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
    <div className='services-section'>
      {services.map((service, index) => (
        <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} features={service.features} />
      ))}
    </div>
  )
}

export default Services
