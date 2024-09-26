  import React, { useState, useEffect } from 'react';
  import { NavLink } from 'react-router-dom';
  import logo from '../assets/Img/CutOff.png'; // Adjust the path based on your project structure
  import './Navbar.css'; // Assuming you have a CSS file for custom styles

  const Navbar = () => {
    const [bgClass, setBgClass] = useState('');

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setBgClass('white-navbar');
        } else {
          setBgClass('');
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Function to handle navbar collapse on link click
    const handleNavLinkClick = () => {
      const navbarToggler = document.querySelector('.navbar-toggler');
      if (navbarToggler.getAttribute('aria-expanded') === 'true') {
        navbarToggler.click();
      }
    };

    return (
      <nav className={`navbar navbar-expand-lg ${bgClass}`}>
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"><i className="bi bi-list fs-2"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-5">
            <NavLink to="/" className="nav-link" activeClassName="active" onClick={handleNavLinkClick}>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active" onClick={handleNavLinkClick}>
              About
            </NavLink>
            <NavLink to="/services" className="nav-link" activeClassName="active" onClick={handleNavLinkClick}>
              Services
            </NavLink>
            <NavLink to="/contact" className="nav-link" activeClassName="active" onClick={handleNavLinkClick}>
              Contact
            </NavLink>
            <NavLink to="/login" className="nav-link" activeClassName="active" onClick={handleNavLinkClick}>
              Login
            </NavLink>
          </div>
        </div>
      </nav>
    );
  };

  export default Navbar;
