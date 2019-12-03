import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profile";
import "./style.css";
import Nav from "../Nav";
import Footer from "../Footer";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <div>
      <Nav />
      <div className="profilecontainer">
        <Fragment>
          {loading ? (
            <Spinner />
          ) : (
            <Fragment>
              <div className="masthead2">
                <div className="container h-100">
                  <div className="row h-100 align-items-center">
                    <div className="text-center search-container2">
                      <h1 className="font-weight-light2"> Collectors </h1>
                      <h4 className="font-weight-light">
                        Browse our community.
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row profilecontainer2 rowlog">
                {profiles.length > 0 ? (
                  profiles.map(profile => (
                    <ProfileItem key={profile._id} profile={profile} />
                  ))
                ) : (
                  <h4>No profiles found...</h4>
                )}
              </div>
            </Fragment>
          )}
        </Fragment>
      </div>
      <Footer />
    </div>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
