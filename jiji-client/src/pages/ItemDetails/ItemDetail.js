import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./ItemDetails.css";
import { itemDetailsInfo, showInterest } from "../../actions/sell.action";
import { useSelector, useDispatch } from "react-redux";
import { format } from "timeago.js";
import axios from "axios";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const dispatch = useDispatch();
  const detailsItem = useSelector((state) => state.detailsInfo);
  const { itemId } = useParams();
  const { details } = detailsItem;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(itemDetailsInfo(itemId));
  }, [dispatch, itemId]);

  const [check, setChk] = useState();

  useEffect(() => {
    const checkInterestStatus = async () => {
      const { data } = await axios.get(
        `/api/item/${userInfo?.userId}/${itemId}`
      );
      setChk(data);
    };
    checkInterestStatus();
  }, [itemId, userInfo?.userId]);

  const numberWithCommas = (x) => {
    return x?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  const show = useSelector((state) => state.showInterest);
  const { loading } = show;

  const handleInterest = () => {
    if (!userInfo) {
      document.location.href = `/login`;
    } else {
      console.log("yeah");
      dispatch(showInterest(itemId));
      document.location.href = `/shown-interests`;
    }
  };
  return (
    <>
      <Navbar />
      <div className="details">
        <div>
          <img
            className="details-image"
            src={details?.item.image}
            alt="details-art"
          />
        </div>
        <div>
          <div className="item-details-det">
            <h2>₦{numberWithCommas(details?.item.price)}</h2>
            {userInfo?.userId === details?.item.sellerId._id ? (
              <p className="error-message">
                you created this product, can't show interest
              </p>
            ) : check === false ? (
              <button className="interest-btn" onClick={handleInterest}>
                {loading ? "loading..." : "Show Interest"}
              </button>
            ) : (
              "ALREADY SHOWED INTEREST"
            )}
          </div>
          <div className="details-seller-info">
            <h3>
              {details?.item.sellerId.first_name}
              {details?.item.sellerId.last_name}
            </h3>
            <p>{details?.item.sellerId.email}</p>
          </div>
          <div className="details-seller-info">
            <p>Name: {details?.item.name} </p>
            <p>Description: {details?.item.description} </p>
            <p>{format(details?.item.createdAt)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
