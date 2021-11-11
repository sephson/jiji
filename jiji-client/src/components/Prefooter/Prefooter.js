import React from "react";
import footerimage from "../../pic/footer-nigeria.svg";
import "./Prefooter.css";
const Prefooter = () => {
  return (
    <div className="prefoot">
      <img alt="prefooterimage" className="footer-image" src={footerimage} />
    </div>
  );
};

export default Prefooter;
