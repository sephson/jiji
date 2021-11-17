import React, { useEffect } from "react";
import "./People.css";
import Navbar from "../../components/Navbar/Navbar";
import { itemInterestedPeople } from "../../actions/sell.action";
import { useSelector, useDispatch } from "react-redux";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";

const People = ({ match }) => {
  const { itemId } = match.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemInterestedPeople(itemId));
  }, [dispatch, itemId]);

  const pep = useSelector((state) => state.people);
  const { people, loading } = pep;
//   console.log(people?.interests);
//   console.log(people?.item);
//   console.log(people);

  return (
    <div className="people">
      <Navbar />
      <div className="list-people">
        {people?.interests.length === 0 ? (
          <p style={{ color: "#3db83a", "font-weight": "bold", "margin-bottom":"0.5rem" }}>
            No one has shown interest yet
          </p>
        ) : loading ? (
          <ReactLoading
            type={"bars"}
            color={"#3db83a"}
            height={"10%"}
            width={"10%"}
          />
        ) : (
          people?.interests.map((p) => {
            return (
              <div className="list-people-cont">
                <p>{p.interestedBuyer.email}</p>
                <p>{format(p.createdAt)}</p>
              </div>
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

export default People;
