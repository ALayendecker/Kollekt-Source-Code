import React, {useState}  from "react";
import {Link, Redirect} from "react-router-dom";
//connect sets the alert used 
import {connect} from "react-redux";
//if alerts dont work the routing is wrong on this we dont use auth folder
import {setAlert} from "../../actions/alert"
import {register} from "../../actions/auth"
import PropTypes from "prop-types";
import "./style.css";

const SignUpForm = ({setAlert, register, isAuthenticated}) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "", 
    password2: ""
  });

  const {username, email, password, password2} = formData;

const onChange = e => 
setFormData({...formData, [e.target.name]: e.target.value});

const onSubmit = async e => {
  e.preventDefault();
  if(password !== password2) {
    //passes through alert to actions-- (msg, type)
    setAlert("Passwords do not match", "danger");
} else {
  register({ username, email, password});
}
};

if (isAuthenticated) {
  return <Redirect to='/dashboard' />;
}

    return (
    <div className="div2 col">
      <div className="wrapper">
        <form className="form-signin" onSubmit={e => onSubmit(e)}>
          <h2 className="form-signin-heading">Create an Account</h2>
          <br></br>
          {/* <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Full Name"
            value={name}
            onChange={e => onChange(e)}
            required=""
            // autofocus=""
          /> */}
          <input
            type="username"
            className="form-control"
            name="username"
            value={username}
            onChange={e => onChange(e)}
            placeholder="Username"
            required=""
          />
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            placeholder="Email"
            required=""
          />
            <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            placeholder="Password"
            required=""
          />
             <input
            type="password"
            className="form-control"
            name="password2"
            value={password2}
            onChange={e => onChange(e)}
            placeholder="Verify Password"
            required=""
          />
          <button className="btn btn-lg btn-dark btn-block" type="submit">
            Sign Up
          </button>
          <br></br>
          <Link to="/login">Already a member? Log In Here</Link>
          <br></br>
        </form>
      </div>
    </div>
);
}

SignUpForm.propTypes = {
 setAlert: PropTypes.func.isRequired,
 register: PropTypes.func.isRequired, 
 isAuthenticated: PropTypes.bool
}

const mapStateTpProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

//if you want to use an action it has to pass through connect
export default connect(
    mapStateTpProps, 
    {setAlert, register}
    )(SignUpForm);