import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./ItemDetails.css";
import { itemDetailsInfo } from "../../actions/sell.action";
import { useSelector, useDispatch } from "react-redux";
import { format } from "timeago.js";

const ItemDetail = ({ history, match }) => {
  const dispatch = useDispatch();
  const detailsItem = useSelector((state) => state.detailsInfo);
  const { itemId } = match.params;
  const { details } = detailsItem;
  console.log(details?.item);

  useEffect(() => {
    dispatch(itemDetailsInfo(itemId));
  }, [dispatch, itemId]);

  const numberWithCommas = (x) => {
    return x?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
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

          {/* <h2 style={{ color: "grey" }}> Description </h2>
          <p>{details?.item.description}</p> */}
        </div>
        <div>
          <div className="item-details-det">
            <h2>₦{numberWithCommas(details?.item.price)}</h2>
            <button className="interest-btn">Show Interest</button>
          </div>
          <div className="details-seller-info">
            <h3>Disu Joseph</h3>
            <p>{details?.item.sellerId.email}</p>
          </div>
          <p>{format(details?.item.createdAt)}</p>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
