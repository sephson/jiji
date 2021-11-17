import React, { useEffect } from "react";
import pp from "../../pic/ppp.jpg";
import { useSelector, useDispatch } from "react-redux";
import { format } from "timeago.js";
import Navbar from "../../components/Navbar/Navbar";
import "./myAdverts.css";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import DeleteIcon from "@material-ui/icons/Delete";
import Noads from "../../pic/no-adverts-active.svg";
import { Link } from "react-router-dom";
import {
  updateItemToSold,
  deleteItem,
  sellerItems,
} from "../../actions/sell.action";

const MyAdverts = () => {
  const dispatch = useDispatch();
  const myAds = useSelector((state) => state.seller);
  const trends = myAds?.seller?.items;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(sellerItems());
  }, [dispatch, userInfo?.userId]);

  useEffect(() => {
    if (!userInfo) return (document.location.href = `/login`);
  }, [userInfo]);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  const updatesold = useSelector((state) => state.markSold);
  console.log(updatesold);
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
            {userInfo?.email}
          </h3>
          <p
            style={{
              "margin-bottom": "1rem",
              "font-weight": "bold",
              color: "grey",
            }}
          >
            {userInfo?.first_name} {userInfo?.last_name}
          </p>
          <p
            style={{
              color: "grey",
            }}
          >
            {myAds?.seller?.total} Items
          </p>
          <p>
            <Link to="/post-ad">Post Advert</Link>
          </p>
        </div>
        <div>
          {trends?.length === 0 ? (
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
            trends?.map((trend) => {
              return (
                <Link to={`/interests/${trend._id}`}>
                  <div className="myads-container">
                    <img
                      className="myads-image"
                      src={trend.image}
                      alt="trend art"
                    />
                    <div className="int-del">
                      <div>
                        <p className="trend-text aa">{trend.name}</p>
                        <p
                          style={{ "font-weight": "bold" }}
                          className="trend-price"
                        >
                          ₦{numberWithCommas(trend.price)}
                        </p>
                        <p className="trend-text aa">
                          {format(trend.createdAt)}
                        </p>
                        <p className="sold-item">
                          {trend.is_sold === true && "sold"}
                        </p>
                      </div>
                      <div className="icons">
                        <DeleteIcon
                          onClick={() => {
                            dispatch(deleteItem(trend._id));
                            document.location.href = "/adverts";
                          }}
                          style={{ color: "green", cursor: "pointer" }}
                        />
                        <AcUnitIcon
                          className="aa"
                          onClick={() => {
                            dispatch(
                              updateItemToSold(trend._id, userInfo?.userId)
                            );
                            document.location.href = "/adverts";
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </main>
    </div>
  );
};

export default MyAdverts;
