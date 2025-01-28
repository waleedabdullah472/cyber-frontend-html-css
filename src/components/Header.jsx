import React, { useState } from 'react';
import './Header.css'; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
     
      <header className="header">
       
        <div className="logo-container">
          <img src="/Group 20.png" alt="Logo" className="logo" />
        </div>

        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/verify-ticket">Verify Ticket</a></li>
            <li><a href="/newone">new one</a></li>
          </ul>
        </nav>
      </header>

      
      <div className="extra-pic-container">
        <img src="/Group.png" alt="Extra" className="extra-image" />
      </div>
    </>
  );
};

export default Header;
