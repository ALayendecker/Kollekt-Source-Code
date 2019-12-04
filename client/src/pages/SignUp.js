//this used to be the SignInUp page but now is just SignUp
import React, { Component } from "react";
import "./Login.css";
import SignUpForm from "../components/SignUpForm";
import Nav from "../components/Nav";

class SignUp extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    loggedin: false,
    signUpForm: true
  };
  changeForm = showSignUp => {
    this.setState({ signUpForm: showSignUp });
  };
  render() {
    return (
      <div>
        <Nav />
        <div className="main row rowlog ">
          <div className="div1 col-4 rowneg">
            <img src={"vinyl3RecordsRevenge.jpeg"} alt="" />
          </div>
          <SignUpForm />
        </div>
      </div>
    );
  }
}

export default SignUp;
