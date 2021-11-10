import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="jiji-logo">jiji.ng</div>
      <p className="nav-text">SELL FASTER, BUY SMARTER</p>
      <div className="nav-cta">
        <p className="nav-cta-signin">Sign In </p>
        <p className="nav-cta-signin">|</p>
        <p className="nav-cta-signin">Registration</p>
        <button className="nav-cta-btn">SELL</button>
      </div>
    </nav>
  );
};

export default Navbar;
