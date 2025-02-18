import React from "react";
import "../../assets/css/main.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Contact Us Section */}
        <div className="footer-section">
        <h1>Prime Pick<span>.</span></h1>
          <h3>Contact Us</h3>
          <p>Email: hello@primepick.com</p>
          <p>Phone: +94 012 345 6789</p>
        </div>

        {/* About Us Section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We are a leading brand in sports equipment, providing top-quality products worldwide.</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Prime Pick. All rights reserved.</p>
        <hr/>
      </div>
    </footer>
  );
};

export default Footer;
