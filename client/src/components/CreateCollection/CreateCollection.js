import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { getCurrentProfile } from "../../actions/profile";
import SetName from "./SetName";
import SetType from "./SetType";
import SetPrivate from "./SetPrivate";

// import AddForm from "../AddForm";
// import DropdownButton from "../DropdownButton";

const CreateCollection = props => {
  console.log(props);
  if (props.profile.profile) {
    console.log(props.profile.profile._id);
  }
  return (
    <div>
      {/* <Fragment>
        <div className="lead">
          <p>User ID in CreateCollection is {user && user._id}</p>
        </div>
      </Fragment> */}
      <h1>Create a new Kollection</h1>
      <form className="form-inline">
        <SetName
          handleInputChange={props.handleInputChange}
          name={props.name}
        />
        <SetType
          setCollectionType={props.setCollectionType}
          type={props.type}
        />
        <p>Private</p>
        <SetPrivate
          handleCheckboxChange={props.handleCheckboxChange}
          isPrivate={props.isPrivate}
        />
        <button
          onClick={e => props.handleFormSubmit(e, props.profile.profile._id)}
        >
          Create Kollection
        </button>
      </form>
    </div>
  );
};

CreateCollection.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps)(CreateCollection);
