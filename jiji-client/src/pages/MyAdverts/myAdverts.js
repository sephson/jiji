import React from "react";
import one from "../../pic/1.jpg";
import two from "../../pic/2.jpg";
import three from "../../pic/3.jpg";
import four from "../../pic/4.jpg";
import five from "../../pic/5.jpg";
import six from "../../pic/6.jpg";
import seven from "../../pic/7.jpg";
import eight from "../../pic/8.jpg";
import nine from "../../pic/9.jpg";
import pp from "../../pic/ppp.jpg";
import Navbar from "../../components/Navbar/Navbar";
import "./myAdverts.css";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import DeleteIcon from "@material-ui/icons/Delete";
import Noads from "../../pic/no-adverts-active.svg";
import { Link } from "react-router-dom";
const myAdverts = () => {
  const trends = [
    { name: "Honda Civic", price: "800,000", picture: one },
    { name: "Honda Civic, 2020", price: "800,000", picture: two },
    { name: "Peugeot 204", price: "1,800,000", picture: three },
    { name: "Honda Civic", price: "800,000", picture: four },
    { name: "Honda Civic, 2020", price: "800,000", picture: five },
    { name: "Peugeot 204", price: "1,800,000", picture: six },
    { name: "Honda Civic", price: "800,000", picture: seven },
    { name: "Honda Civic, 2020", price: "800,000", picture: eight },
    { name: "Peugeot 204", price: "1,800,000", picture: nine },
  ];
  return (
    <div className="myads">
      <Navbar />
      <main className="main-myads">
        <div className="seller-profile">
          <img src={pp} alt="userprofile" className="userprofile" />
          <h3
            style={{
              "margin-bottom": "1rem",
              "font-weight": "bold",
              color: "grey",
            }}
          >
            Disu Toyin
          </h3>
          <p style={{ color: "green", "font-weight": "bold" }}>
            disutj@gmail.com
          </p>
        </div>
        <div>
          {trends.length === 0 ? (
            <div className="empty-ad">
              <img src={Noads} alt="no adss art" />
              <h1 style={{ color: "grey", "text-align": "center" }}>
                No Adverts to display. Post your first advert
                <br />
                <button style={{ "font-weight": "bold" }} className="reg-btn">
                  <Link to="/post-ad">Here</Link>
                </button>
              </h1>
            </div>
          ) : (
            trends.map((trend) => {
              return (
                <div className="myads-container">
                  <img
                    className="myads-image"
                    src={trend.picture}
                    alt="trend art"
                  />
                  <div className="int-del">
                    <div>
                      <p className="trend-text aa">{trend.name}</p>
                      <p
                        style={{ "font-weight": "bold" }}
                        className="trend-price "
                      >
                        ₦{trend.price}
                      </p>
                      <p className="trend-text aa">Interests: 45</p>
                      <p className="trend-text aa">Date</p>
                    </div>
                    <div className="icons">
                      <DeleteIcon style={{ color: "green" }} />
                      <AcUnitIcon className="aa" />
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </main>
    </div>
  );
};

export default myAdverts;
