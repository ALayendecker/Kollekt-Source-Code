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
    <div className="card" data-aos="fade-up">
      <img className="card-img-top" src={avatar} />
      <h4>{username}</h4>

      <p className="my-1">
        <strong> Location: </strong> {location && <span>{location}</span>}
      </p>

      <p className="my-1">
        <strong> Collection Interests </strong>
      </p>

      <div className="textInterest">
        {interests.slice(0, 3).map((interests, index) => (
          <p key={index}>{interests}</p>
        ))}
      </div>
      <Link to={`/profile/user/${_id}`} className="btn btn-secondary">
        View Collections
      </Link>
    </div>
  );
};

ProfileItem.propTypes = { profile: PropTypes.object.isRequired };

export default ProfileItem;
