import React from 'react'
import '../css/ServiceCard.css'

const ServiceCard = ({icon, title, description, features}) => {
  return (
    <div className='services-card'>
      <div className="section-heading">
        <img src={icon} alt={title} />   
        <h5>{title}</h5>
      </div>
      <div className='description'>
        <p>{description}</p>
        <ul className='features'>
            {features.map((feature, index) => (
                <li key={index}><span className='tick-feature'>✓</span> {feature}</li>
        ))}
        </ul>
      </div>
      <div className='section-btn'>
        <button className='learn-more'>Learn More →</button>
      </div>
    </div>
  )
}

export default ServiceCard
