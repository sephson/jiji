import React from "react";
import "./Navbar.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Drop.css";

const Navbar = () => {
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    document.location.href = "/";
  };

  return (
    <>
      <nav className="navbar">
        <div className="jiji-logo">
          <Link to="/">jiji.ng</Link>
        </div>
        <p className="nav-text">SELL FASTER, BUY SMARTER</p>
        {userInfo ? (
          <div className="nav-person">
            <div>
              <Link to="/shown-interests">
                <FavoriteIcon className="hovercon" />
                <p className="display-none">interest</p>
              </Link>
            </div>
            <div>
              <ExitToAppIcon className="hovercon" onClick={logoutHandler} />
              <p className="display-none">logout</p>
            </div>
            <div>
              <Link to="/adverts">
                <AccountCircleIcon className="hovercon" />
                <p className="display-none">adverts</p>
              </Link>
            </div>
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

            <button className="nav-cta-btn">
              <Link to={userInfo ? `/post-ad` : `/login`}>SELL</Link>
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
