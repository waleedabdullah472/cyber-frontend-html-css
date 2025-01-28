import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import "./Newone.css";

const NewOne = () => {
  return (
    
      <div className="card">
        <h1 className="heading">
          C<span>o</span>ming Soon!!!
        </h1>
       
        <div className="button-container">
          <button className="back-home-btn">Back to Home</button>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com" className="social-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com" className="social-icon">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://www.linkedin.com" className="social-icon">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://twitter.com" className="social-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.youtube.com" className="social-icon">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    
  );
};

export default NewOne;
