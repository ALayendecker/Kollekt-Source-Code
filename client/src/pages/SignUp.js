//this used to be the SignInUp page but now is just SignUp
import React, { Component } from "react";
import "./Login.css";
import SignUpForm from "../components/SignUpForm"

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
      changeForm = showSignUp=>{
          this.setState({signUpForm:showSignUp})
      }
  render() {
    return (

         <div className="main row ">
    <div className="div1 col">
      <img src={"starwars_1.jpg"} alt="Logo" />
    </div>
 <SignUpForm />
 </div>

    )}
  }


export default SignUp;