import React from 'react';
import "../styles.css";
import Icon from "../Assets/Images/icons-cart.png"
import Logo from "../Assets/Images/logo-1.png";

function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="nav-links">
        <a href="#">HOME</a>
        <a href="#">BICYCLES</a>
        <a href="#">ACCESSORIES</a>
        <a href="#">ABOUT US</a>
        <a href="#">CONTACT</a>
      </div>
      <div className="nav-cart">
        <span>$0.0</span>
        <div className="cart-icon">
          <img src={Icon} alt="Cart Icon" style={{ width: '20px', height: '20px' }} />
          <span className="cart-count">0</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
