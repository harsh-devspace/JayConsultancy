import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt="logo" />
        <div className="logo-texts">
          <h1><span><Link className='link' to='/'>Jay Consultancy</Link></span></h1>
          <h4>Insurance & Investment Advisor</h4>
        </div>
      </div>
      <div className='nav-links'>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/about'>About</Link>
        <Link className='link' to='/services'>Services</Link>
        <Link className='link' to='/investments'>Investments</Link>
        <Link className='link' to='/contact'>Contact Us</Link>
        <Link className='link' to='/privacypolicy'>Privacy Policy</Link>
        <button className='call-now' type='button'>Call Now</button>
      </div>
    </div>
  )
}

export default Navbar