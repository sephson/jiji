import React, { useEffect } from "react";
import "./Trending.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { items } from "../../actions/sell.action";

const Trending = () => {
  const dispatch = useDispatch();
  const a = useSelector((state) => state.allItems);
  const { loading, allItems } = a;

  useEffect(() => {
    dispatch(items());
  }, [dispatch]);

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="trends">
      {loading ? (
        <ReactLoading
          type={"bars"}
          color={"#3db83a"}
          height={"10%"}
          width={"10%"}
        />
      ) : (
        allItems?.all.map((trend) => {
          return (
            <div className="trend-container">
              <Link to={`/item/${trend._id}`}>
                <img
                  className="trend-image"
                  src={trend.image}
                  alt="trend art"
                />
                <p className="trend-text">{trend.name}</p>
                <p className="trend-price">₦{numberWithCommas(trend.price)}</p>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Trending;
