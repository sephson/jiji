import React from "react";
import "./Modal.css";

const Modal = ({ closeModal }) => {
  const handleClose = () => {
    closeModal(false);
  };

  return (
    <div className="modal">
      <div onClick={handleClose} className="overlay"></div>
      <form className="modal-content">
        <p className="closebtn" onClick={handleClose}>
          X
        </p>
        <p>Register via email and phone</p>
        <input className="reg-input" placeholder="Enter email" />
        <input className="reg-input" type="password" placeholder="Password" />
        <input className="reg-input" placeholder="Firstname" />
        <input className="reg-input" placeholder="Lastname(optional)" />
        <input className="reg-input" placeholder="Phone digits" />
        <div className="rules-check">
          <input className="input-check" type="checkbox" />
          <p>I agree with the rules</p>
        </div>
        <button className="reg-btn">REGISTER</button>
        <div className="acctsignin">
          <p>Already have an account ? </p>
          <p style={{ color: "#3db83a" }}>Sign in</p>
        </div>
      </form>
    </div>
  );
};

export default Modal;
