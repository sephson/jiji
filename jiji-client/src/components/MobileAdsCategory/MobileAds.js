import React from "react";
import one from "../../pic/home.png";
import two from "../../pic/electronics.png";
import three from "../../pic/equipment.png";
import four from "../../pic/jobseekers.png";
import five from "../../pic/vehicles.png";
import six from "../../pic/real-estate.png";
import seven from "../../pic/home.png";
import eight from "../../pic/electronics.png";
import nine from "../../pic/vehicles.png";
import "./MobileAds.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MobileAds = () => {
  const ads = [
    { tag: "Vehicles", adpic: one, number: "123,908" },
    { tag: "houses", adpic: two, number: "123,908" },
    { tag: "Appliances", adpic: three, number: "123,908" },
    { tag: "Furniture", adpic: four, number: "123,908" },
    { tag: "Cream", adpic: five, number: "123,908" },
    { tag: "Food", adpic: six, number: "123,908" },
    { tag: "Jobs", adpic: seven, number: "123,908" },
    { tag: "Books", adpic: eight, number: "123,908" },
    { tag: "Equipments", adpic: nine, number: "123,908" },
  ];
  const userRegister = useSelector((state) => state.userRegister);
  const userLogin = useSelector((state) => state.userLoginReducer);

  return (
    <div className="smaller-categories">
      <div className="post-ad">
        <Link
          to={
            userLogin?.userInfo || userRegister?.userInfo ? "/post-ad" : "/login"
          }
        >
          <div className="circle-ad">+</div>
          <p className="postad-text">Post Ad</p>
        </Link>
      </div>

      {ads.map((ad) => {
        return (
          <div className="smaller-cat-containers">
            <img className="smaller-tag-images" alt="cat-tags" src={ad.adpic} />
            <div>
              <p className="smaller-ad-tag">{ad.tag}</p>
              <p className="ad-numbers">{ad.number} ads</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MobileAds;
