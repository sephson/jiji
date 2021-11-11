import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Main from "../../components/MainBody/Main";
import Prefooter from "../../components/Prefooter/Prefooter";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      <Prefooter />
      <Footer />
    </div>
  );
};

export default Home;
