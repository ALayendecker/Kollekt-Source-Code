import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.css";

const ProfileItem = ({
  profile: {
    user: { _id, username, avatar },
    status,
    location,
    interests
  }
}) => {
  return (
    <div className="container profileItem">
    <div className="profile">
      <img src={avatar} alt="" className="round-img" />
      <div>
        <h2>Username: {username}</h2>
        <p>Collector Status: {status}</p>
        <p className="my-1">Based out of: {location && <span>{location}</span>}</p>
        <Link to="/PublicCollection" className="btn btn-secondary">
          View Collections
        </Link>
      </div>
      <ul>
        <p className="my-1">Collection Interests:</p>
        {interests.slice(0, 4).map((interests, index) => (
          <div className="interest">
            <li key={index} className="textInterest">
            {interests}
          </li>
          </div>
        ))}
      </ul>
    </div>
    </div>
  );
};

ProfileItem.propTypes = { profile: PropTypes.object.isRequired };

export default ProfileItem;
