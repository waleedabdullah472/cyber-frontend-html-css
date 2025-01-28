import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/footer.png" alt="Logo" width="100" height="100" />
        </div>

        <div className="footer-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/bio">Bio</a></li>
          </ul>
        </div>



        <div className="footer-contact">
          <p><strong>Email:</strong> <a href="mailto:info@example.com">info@example.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+911234567890">+91 1234567890</a></p>
          <p><strong>Working Days:</strong> Monday to Sunday</p>
          <p><strong>Working Hours:</strong> 8 AM to 8 PM</p>
          <p><strong>Address:</strong> Education Center, Mumbai</p>

          <div className="contact-icons">
            <a href="mailto:info@example.com"><i className="fas fa-envelope"></i></a>
            <a href="tel:+911234567890"><i className="fas fa-phone"></i></a>
            <a href="https://www.google.com/maps?q=Mumbai" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-map-marker-alt"></i>
            </a>
          </div>
        </div>






      </div>
      
    </footer>
  );
};

export default Footer;
