// import React, { Fragment, useEffect } from "react";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { getCurrentProfile } from "../../actions/profile";
import SetName from "./SetName";
import SetType from "./SetType";
import SetPrivate from "./SetPrivate";

import Spinner from "../layout/Spinner";
import Card from "../Cards";

const CreateCollection = props => {
  // console.log(props);
  if (props.profile.profile) {
    console.log(props.profile.profile._id);
    console.log(props.profile.profile.collections);
  }

  return props.profile.loading && props.profile.profile === null ? (
    <Spinner />
  ) : props.profile.profile ? (
    <div>
      <h1>Create a new Collection</h1>
      <form className="form-inline">
        <SetName
          handleInputChange={props.handleInputChange}
          name={props.name}
        />
        <SetType
          text={"Select a Type"}
          dropdownFunction={props.setCollectionType}
          type={props.type}
        />
        <p>Private</p>
        <SetPrivate
          handleCheckboxChange={props.handleCheckboxChange}
          isPrivate={props.isPrivate}
        />
        <button className="btn btn-secondary"
          onClick={e => props.handleFormSubmit(e, props.profile.profile._id)}
        >
          Create Collection
        </button>
      </form>
      {props.profile.profile.collections.length ? (
        <div className="row">
          {props.profile.profile.collections.map(collection => (
            <div key={collection._id}>
              <Card
                {...collection}
                deleteFunction={() => props.deleteCollection(collection._id)}
                linkInfo={{
                  pathname: "/collectiondetails",
                  state: { collectionId: collection._id }
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>No Collections Yet</p>
      )}
    </div>
  ) : (
    <div>
      <p>Create a profile to create Collections!</p>
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
