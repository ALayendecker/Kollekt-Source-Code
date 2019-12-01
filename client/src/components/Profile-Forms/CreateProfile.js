import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";
import "./style.css";
import Nav from "../Nav";
import Footer from "../Footer";

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    location: "",
    bio: "",
    status: "",
    interests: ""
  });

  const { location, bio, status, interests } = formData;

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <Nav />
    <Fragment>
      <h1 className="large text-primary">Create Your Profile</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <select name="status" value={status} onChange={e => onChange(e)}>
            <option value="0">* Collector Status?</option>
            <option value="Trinket Collector">Collector of Trinkets</option>
            <option value="Hobbiest">Hobbiest</option>
            <option value="Enthusiast">Enthusiast</option>
            <option value="Master Collector">Master Collector</option>
          </select>
          <small className="form-text">What kind of collector are you?</small>
        </div>
        <div className="form-group">
          <input
            className="input"
            type="text"
            placeholder="Location (Optional)"
            name="location"
            value={location}
            onChange={e => onChange(e)}
          />
          <small className="form-text">
            City & state suggested (eg. Boston, MA)
          </small>
        </div>
        <div className="form-group">
          <input
            className="input"
            type="text"
            placeholder="* Interests"
            name="interests"
            value={interests}
            onChange={e => onChange(e)}
          />
          <small className="form-text">
            Please use comma separated values (eg. Magic Cards,Marvel
            Comics,Dice,Coins)
          </small>
        </div>
        <div className="form-group">
          <textarea
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={e => onChange(e)}
          ></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>

        {/* <div className="my-2">
          <button type="button" className="btn btn-light">
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        <div className="form-group social-input className="input"">
          <i className="fab fa-twitter fa-2x"></i>
          <input className="input" type="text" placeholder="Twitter URL" name="twitter" />
        </div>

        <div className="form-group social-input className="input"">
          <i className="fab fa-facebook fa-2x"></i>
          <input className="input" type="text" placeholder="Facebook URL" name="facebook" />
        </div>

        <div className="form-group social-input className="input"">
          <i className="fab fa-youtube fa-2x"></i>
          <input className="input" type="text" placeholder="YouTube URL" name="youtube" />
        </div>

        <div className="form-group social-input className="input"">
          <i className="fab fa-linkedin fa-2x"></i>
          <input className="input" type="text" placeholder="Linkedin URL" name="linkedin" />
        </div>

        <div className="form-group social-input className="input"">
          <i className="fab fa-instagram fa-2x"></i>
          <input className="input" type="text" placeholder="Instagram URL" name="instagram" />
        </div> */}

        {/* this is a submit button as input */}
        <input type="submit" className="btn btn-secondary my-1" />
        <Link className="btn btn-secondary my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
    <Footer />
    </div>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
