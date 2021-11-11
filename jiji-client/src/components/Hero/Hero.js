import React from "react";
import "./Hero.css";
import man from "../../pic/man.png";
import women from "../../pic/girls.png";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

const Hero = () => {
  return (
    <main className="hero">
      <img className="hero-leftside" alt="man" src={man} />
      <div className="hero-middle-search">
        <p className="hero-location-finder">
          Find anything in
          <p className="nigerian-location">All Nigeria</p>
        </p>
        <input placeholder="I am looking for..." className="hero-search" />
      </div>
      <img className="hero-rightside" alt="man" src={women} />
    </main>
  );
};
export default Hero;
