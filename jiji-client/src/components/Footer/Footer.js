import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <main className="footer-sections">
        <div className="footer-sec">
          <p className="foot-head">About-us</p>
          <p className="foot-text">About Jiji</p>
          <p className="foot-text">We are hiring!</p>
          <p className="foot-text">Terms & Conditions</p>
          <p className="foot-text">Privacy Policy</p>
          <p className="foot-text">Billing Policy</p>
          <p className="foot-text">Cookie policy</p>
        </div>
        <div className="footer-sec">
          <p className="foot-head">Support</p>
          <p className="foot-text">support@jiji.ng</p>
          <p className="foot-text">Contact Us</p>
          <p className="foot-text">Safety Tips</p>
          <p className="foot-text">FAQ</p>
        </div>
        <div className="footer-sec">
          <p className="foot-head">Our apps</p>
          <p className="foot-text">About Jiji</p>
          <p className="foot-text">We are hiring!</p>
        </div>
        <div className="footer-sec">
          <p className="foot-head">Our Resources</p>
          <p className="foot-text">Blog</p>
          <p className="foot-text">Jiji On FB</p>
          <p className="foot-text">Our Instagram</p>
          <p className="foot-text">Our Twitter</p>
          <p className="foot-text">Our Youtube</p>
        </div>
        <div className="footer-sec">
          <p className="foot-head">Hot links</p>
          <p className="foot-text">Brands</p>
          <p className="foot-text"> Jiji Sellers</p>
          <p className="foot-text">Terms & Conditions</p>
          <p className="foot-text">Privacy Policy</p>
        </div>
      </main>
      <p className="copyright"> © 2021 Jiji.ng </p>
    </footer>
  );
};

export default Footer;
