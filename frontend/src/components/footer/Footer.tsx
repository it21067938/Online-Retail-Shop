import React from "react";
import "../../assets/css/main.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Contact Us Section */}
        <div className="footer-section">
          <h1>
            Prime Pick<span>.</span>
          </h1>
          <br />
          <p className="email">123 Main Street,</p>
          <p className="email">Anytown, CA 12345</p> <br />
          <p className="email">
            <span>Email: </span> hello@primepick.com
          </p>
          <p className="email">
            <span>Phone:</span> +94 012 345 6789
          </p>
        </div>

        {/* Pages Section */}
        <div className="footer-section">
          <h3>Pages</h3>
          <p className="footer-pages">Home</p>
          <p className="footer-pages">About Us</p>
          <p className="footer-pages">Services</p>
          <p className="footer-pages">Contact Us</p>
          <p className="footer-pages">Products</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pinterest
            </a>
          </div>
        </div>

          {/* Our Newsletter Section */}
          <div className="footer-section">
          <h3>Our Newsletter</h3>
          <p className="footer-pages">Subscribe to our newsletter and receive the latest news about our products and services!</p>
          <br/><input type="email"></input><button>Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>
          &copy; 2025 <span>Prime Pick.</span> All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
