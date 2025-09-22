import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Logo from './Logo';

 const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-container">

        <div className="Footer-logo">
          <h2><Logo/></h2>
          <p>&copy; 2025 All rights reserved.</p>
        </div>

        <div className="Footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/Services">Services</a></li>
          </ul>
        </div>

        <div className="Footer-contact">
          <h4>Contact Us</h4>
          <p>Email: info@example.com</p>
          <p>Phone: +91 12345 67890</p>
        </div>

        <div className="Footer-social">
          <h4>Follow Us</h4>
          <div className="icons">
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
            <FaLinkedin/>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;