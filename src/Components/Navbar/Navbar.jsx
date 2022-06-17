import React from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    <div className="navbar-row">
      <div className="left">
        <div className="name">Tourism Management System</div>
        <span>Toggle</span>
      </div>
      <div className="right">
        <div className="navlist">
          <ul style={{ listStyleType: 'none' }}>
            <li>Home</li>
            <li>About</li>
            <li>Our Tours</li>
            <li>Contact</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
