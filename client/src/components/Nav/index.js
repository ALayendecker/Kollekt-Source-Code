import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import "./style.css";

const Nav = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul className="navbar-nav ml-auto">
      {/* <li className="nav-item active">
        <Link className="nav-link " to="/">
          Home <span className="sr-only">(current)</span>
        </Link>
      </li> */}
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard">
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" onClick={logout} to="/"><i className="fas fa-sign-out-alt"></i>
          Logout
        </Link>
        </li> 
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav ml-auto">
      {/* <li className="nav-item active">
        <Link className="nav-link " to="/">
          Home <span className="sr-only">(current)</span>
        </Link>
      </li> */}
      <li className="nav-item">
        <Link className="nav-link" to="/login"><i className="fas fa-sign-in-alt"></i>
          Sign-in
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup"><i className="fas fa-user-plus"></i>
          Sign-up
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard">
          Dashboard
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark">
      <Link to="/"><img src="/assets/images/logo_small.png" alt="logo"></img></Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon "></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav"></div>
      {!loading && ( <Fragment>{isAuthenticated ? authLinks : guestLinks }</Fragment>)}
    </nav>
  );
};

Nav.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Nav);
