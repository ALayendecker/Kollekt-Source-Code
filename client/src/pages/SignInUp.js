// will render log in and sign up need to add function to determine which needs to happen
import React, { Component } from "react";
import "./Login.css";
import Login from "../components/Login"
import SignUp from "../components/SignUp"

class SignInUp extends Component {

    state = {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
        loggedin: false,
      };

  render() {
    return (
    <div>
    <Login />
    <SignUp />
    </div>
      )
  }
}

export default SignInUp;