import React, { useState } from 'react';
import '../CSS/nav.css';

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-header">
        <div className="logo-container">
          <img
            src={`${process.env.PUBLIC_URL}/DC_Logo_HR-removebg-preview.png`}
            alt="DevCreate Logo"
            className="logo"
          />
          <h1 className="title">DevCreate</h1>
        </div>
        <button className="menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? '✖' : '☰'}
        </button>
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu' : ''}`}>
        <li><a href="#home" className="active">Home</a></li>
        <li><a href="#services">Our Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skyciv">SkyCiv</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#openings">Openings</a></li>
        <li><a href="#trainings">Trainings</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
