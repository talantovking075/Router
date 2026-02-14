import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          My<span>Blog</span>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-social">
          <a href="https://t.me/yoursite" className="social-icon">TG</a>
          <a href="https://instagram.com/yoursite" className="social-icon">IG</a>
          <a href="https://facebook.com/yoursite" className="social-icon">FB</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Restaurant. Barcha huquqlar himoyalangan.</p>
      </div>
    </footer>
  );
};

export default Footer;