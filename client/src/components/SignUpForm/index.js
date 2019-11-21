import React from "react";
import "./style.css";

function SignUpForm() {
    return (
    
    <div className="div2 col">
      <div className="wrapper">
        <form className="form-signin">
          <h2 className="form-signin-heading">Create an Account</h2>
          <br></br>
          <input
            type="text"
            className="form-control"
            name="firstname"
            placeholder="Andrew"
            required=""
            autofocus=""
          />
          <input
            type="text"
            className="form-control"
            name="lastname"
            placeholder="Verane"
            required=""
            autofocus=""
          />
          <input
            type="username"
            className="form-control"
            name="username"
            placeholder="SisterWife4Life"
            required=""
          />
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="email@email.com"
            required=""
          />
            <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required=""
          />
          <button className="btn btn-lg btn-dark btn-block" type="submit">
            Sign Up
          </button>
          <br></br>
          <a href="/login">Already a member? Log In Here</a>
          <br></br>
          <a href="/">Take Me Home</a>
        </form>
      </div>
    </div>
  
);

}
export default SignUpForm;