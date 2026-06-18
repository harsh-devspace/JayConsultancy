import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../css/Navbar.css'
import menuOpenIcon from '../assets/toggle-open.png'
import menuCloseIcon from '../assets/toggle-close.png'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])
  

  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt="logo" />
        <div className="logo-texts">
          <h1><Link className='link' to='/'>Jay Consultancy</Link></h1>
          <h4>Insurance & Investment Advisor</h4>
        </div>
      </div>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/about'>About</Link>
        <Link className='link' to='/services'>Services</Link>
        <Link className='link' to='/investments'>Investments</Link>
        <Link className='link' to='/contact'>Contact Us</Link>
        <button className='link call-now' type='button'>Call Now</button>
        <div className='nav-copyright'>
          <p>©2026 <span><Link className='nav-tagline' to='/'>Jay Consultancy</Link></span></p>
        </div>
      </div>


      <button className='menu-btn' onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <img className='menu-icon' src={menuCloseIcon} alt='menu-close-icon' /> : <img className='menu-icon' src={menuOpenIcon} alt='menu-open-icon' />}
      </button>
    </div>
  )
}

export default Navbar