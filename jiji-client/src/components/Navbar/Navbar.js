import React, { useState } from "react";
import "./Navbar.css";
import Modal from "../../components/Modal/Modal";
const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  };

  //   if (!openModal) {
  //     document.body.classList.remove("active-modal");
  //   } else {
  //     document.body.classList.add("active-modal");
  //   }
  return (
    <>
      <nav className="navbar">
        <div className="jiji-logo">jiji.ng</div>
        <p className="nav-text">SELL FASTER, BUY SMARTER</p>
        <div className="nav-cta">
          <p className="nav-cta-signin">Sign In </p>
          <p className="nav-cta-signin">|</p>
          <p className="nav-cta-signin" onClick={handleModal}>
            Registration
          </p>
          <button className="nav-cta-btn">SELL</button>
        </div>
      </nav>
      {openModal && <Modal closeModal={setOpenModal} />}
    </>
  );
};

export default Navbar;
