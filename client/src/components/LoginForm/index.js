import React from "react";
import "./style.css";

function LoginForm() {
    return (
   
    <div className="div2 col">
      <div className="wrapper">
        <form className="form-signin">
          <h2 className="form-signin-heading">Please login</h2>
          <br></br>

          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Email Address"
            required=""
            autofocus=""
          />
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required=""
          />

          <button className="btn btn-lg btn-dark btn-block" type="submit">
            Login
          </button>
          <br></br>
          <a href="/signup">Create an account!</a>
          <br></br>
          <a href="/">Take Me Home</a>
        </form>
      </div>
    </div>

);

}
export default LoginForm;