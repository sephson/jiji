import React from "react";
import "./AdsCategory.css";

import one from "../../pic/1.jpg";
import two from "../../pic/2.jpg";
import three from "../../pic/3.jpg";
import four from "../../pic/4.jpg";
import five from "../../pic/5.jpg";
import six from "../../pic/6.jpg";
import seven from "../../pic/7.jpg";
import eight from "../../pic/8.jpg";
import nine from "../../pic/9.jpg";
const AdsCategory = () => {
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

  return (
    <div className="categories">
      {ads.map((ad) => {
        return (
          <div className="cat-containers">
            <img className="tag-images" alt="cat-tags" src={ad.adpic} />
            <div>
              <p className="ad-tag">{ad.tag}</p>
              <p className="ad-numbers">{ad.number} ads</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdsCategory;
