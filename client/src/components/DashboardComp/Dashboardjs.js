import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import DashboardActions from "./DashboardActions";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";

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
      <p className="lead">
        <h3>Welcome {user && user.username}</h3>
        <img src={user.avatar} alt="" />
        <p>{`Status: ${profile.status}`}</p>
        <p>{`Location: ${profile.location}`}</p>
        <p>{`Collector of: ${profile.interests}`}</p>
        {/* <p>{location}</p> */}
        {/* <p>{interests}</p> */}
      </p>
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
          <Link to="/create-profile" className="btn btn-primary">
            Create Profile
          </Link>
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
