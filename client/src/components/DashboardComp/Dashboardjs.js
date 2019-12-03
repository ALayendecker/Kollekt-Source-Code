import React, { Fragment, useEffect } from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import "./style.css";

const Dashboardjs = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: {
    profile,
    // user: { avatar },
    // status,
    // location,
    // interests,
    loading
  }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary"> Profile</h1>
      <div className="lead">
        <h3>Welcome {user && user.username}</h3>
        {user && <img src={user.avatar} alt={user.username} />}
        {profile !== null && (
          <div>
            <p>Status: {profile.status}</p>
            <p>Location: {profile.location}</p>
            <p>Collector of: {profile.interests}</p>
          </div>
        )}
        {/* <p>{location}</p> */}
        {/* <p>{interests}</p> */}
      </div>
      {profile !== null ? (
        <Fragment>
          <div>
            <DashboardActions />
            <div className="my-2">
              <button
                className="btn btn-danger dlt-button"
                onClick={() => deleteAccount()}
              >
                Delete My Account
              </button>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>No Profile setup yet. Create profile.</p>
          <div>
            {/* had to change from link to button and wrap in a tag to get style and function */}
            <a href="/create-profile">
              <button type="button" className="btn btn-secondary doSomething">
                Create Profile
              </button>
            </a>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboardjs.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboardjs
);
