import React from 'react';
import { Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
        </p>
        <p className="footer-text">
          Made with <Heart size={16} className="heart-icon" /> by MERN Developer
        </p>
      </div>
    </footer>
  );
};

export default Footer;