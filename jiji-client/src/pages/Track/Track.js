import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { trackMyItems } from "../../actions/sell.action";
import { useSelector, useDispatch } from "react-redux";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

const Track = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(trackMyItems());
  }, [dispatch]);

  const numberWithCommas = (x) => {
    return x?.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  const trackInts = useSelector((state) => state.trackInterest);
  const { loading, items } = trackInts;
  const i = items?.items;
  return (
    <div className="people">
      <Navbar />
      <div className="list-people">
        {i?.length === 0 ? (
          <p style={{ color: "#3db83a", "font-weight": "bold" }}>
            You have not shown interest in any item yet
          </p>
        ) : loading ? (
          <ReactLoading
            type={"bars"}
            color={"#3db83a"}
            height={"10%"}
            width={"10%"}
          />
        ) : (
          i?.map((p) => {
            return (
              <Link to={`/item/${p.itemId._id}`}>
                <div className="list-people-cont">
                  <p>{p.itemId.name}</p>
                  <p>₦ {numberWithCommas(p.itemId.price)}</p>
                  <p>{format(p.createdAt)}</p>
                  <img src={p.itemId.image} alt="int" style={{ width: "5%" }} />
                </div>
              </Link>
            );
          })
        )}
      </div>
      <button className="reg-btn">
        <Link to="/adverts">Back</Link>
      </button>
    </div>
  );
};

export default Track;
