import React from "react";
import "./style.css";

function LoginForm() {
    return (
   
    <div className="div2 col">
      <div class="wrapper">
        <form class="form-signin">
          <h2 class="form-signin-heading">Please login</h2>
          <br></br>

          <input
            type="text"
            class="form-control"
            name="username"
            placeholder="Email Address"
            required=""
            autofocus=""
          />
          <input
            type="password"
            class="form-control"
            name="password"
            placeholder="Password"
            required=""
          />

          <button class="btn btn-lg btn-dark btn-block" type="submit">
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