import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
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
  profile: { profile, loading }
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
        <p>Welcome {user && user.username}</p>
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
              Delete My Account
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>No Profile setup yet. Create profile.</p>
          <Link to="/create-profile" className="btn btn-secondary">
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
