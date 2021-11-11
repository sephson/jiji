import React from "react";
import Trending from "../Trending/Trending";
import AdsCategory from "../AdsCategory/AdsCategory";
import Mobile from "../MobileAdsCategory/MobileAds";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-body">
      <div className="mobile-desktop">
        <AdsCategory />
        <Mobile />
      </div>
      <Trending />
    </div>
  );
};

export default Main;
