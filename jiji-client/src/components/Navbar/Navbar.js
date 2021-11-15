import React from "react";
import "./Navbar.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;
  return (
    <>
      <nav className="navbar">
        <div className="jiji-logo">jiji.ng</div>
        <p className="nav-text">SELL FASTER, BUY SMARTER</p>
        {userInfo ? (
          <div className="nav-person">
            <AccountCircleIcon />
          </div>
        ) : (
          <div className="nav-cta">
            <p className="nav-cta-signin">
              <Link to="/login">Sign In </Link>
            </p>
            <p className="nav-cta-signin">|</p>
            <p className="nav-cta-signin">
              <Link to="/register">Registration </Link>
            </p>

            <button className="nav-cta-btn">SELL</button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
