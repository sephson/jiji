import React from "react";
import Trending from "../Trending/Trending";
import AdsCategory from "../AdsCategory/AdsCategory";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-body">
      <AdsCategory />
      <Trending />
    </div>
  );
};

export default Main;
