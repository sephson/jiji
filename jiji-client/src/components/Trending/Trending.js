import React from "react";
import "./Trending.css";
import one from "../../pic/1.jpg";
import two from "../../pic/2.jpg";
import three from "../../pic/3.jpg";
import four from "../../pic/4.jpg";
import five from "../../pic/5.jpg";
import six from "../../pic/6.jpg";
import seven from "../../pic/7.jpg";
import eight from "../../pic/8.jpg";
import nine from "../../pic/9.jpg";

const Trending = () => {
  const trends = [
    { name: "Honda Civic", price: "#800,000", picture: one },
    { name: "Honda Civic, 2020", price: "#800,000", picture: two },
    { name: "Peugeot 204", price: "#1,800,000", picture: three },
    { name: "Honda Civic", price: "#800,000", picture: four },
    { name: "Honda Civic, 2020", price: "#800,000", picture: five },
    { name: "Peugeot 204", price: "#1,800,000", picture: six },
    { name: "Honda Civic", price: "#800,000", picture: seven },
    { name: "Honda Civic, 2020", price: "#800,000", picture: eight },
    { name: "Peugeot 204", price: "#1,800,000", picture: nine },
  ];
  return (
    <div className="trends">
      {trends.map((trend) => {
        return (
          <div className="trend-container">
            <img className="trend-image" src={trend.picture} alt="trend art" />
            <p>{trend.name}</p>
            <p>{trend.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Trending;
