import React, {useState}  from "react";
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {login} from "../../actions/auth";
import "./style.css";

//login being called is from actions destructuring 
const LoginForm = ({login, isAuthenticated}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "", 
  });

  const { email, password} = formData;

const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

const onSubmit = async e => {
  e.preventDefault();
  login({email, password});
}

//redirect if logged in
if (isAuthenticated) {
  return <Redirect to='/dashboard' />;
}


    return (
    <div className="div2 col">
      <div className="wrapper">
        <form className="form-signin" onSubmit={e => onSubmit(e)}>
          <h2 className="form-signin-heading">Sign into your Account</h2>
          <br></br>
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
          <button className="btn btn-lg btn-dark btn-block" type="submit">
            Sign in
          </button>
          <br></br>
          <Link to="/signup">Need an Account? Signup Here</Link>
          <br></br>
        </form>
      </div>
    </div>
);
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired, 
  isAuthenticated: PropTypes.bool
}

const mapStateTpProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(
  mapStateTpProps, 
  //login here is the action being passed in 
  {login}
  )(LoginForm);