import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileItem = ({
  profile: {
    user: { _id, username, avatar },
    status,
    location,
    interests
  }
}) => {
  return (
    <div className="profile bg-light">
      <img src={avatar} alt="" className="round-img" />
      <div>
        <h2>{username}</h2>
        <p>{status}</p>
        <p className="my-1">{location && <span>{location}</span>}</p>
        <Link to={`/profile/user/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
      <ul>
        <p className="my-1">Collection Interests</p>
        {interests.slice(0, 4).map((interests, index) => (
          <li key={index} className="text-primary">
            {interests}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = { profile: PropTypes.object.isRequired };

export default ProfileItem;
