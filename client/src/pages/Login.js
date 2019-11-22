import React, { Component } from "react";
// import Nav from "../components/Nav";
import "./Login.css";
import LoginForm from "../components/LoginForm"

class Login extends Component {

  state = {
    username: "",
    password: "",
    loggedin: false,
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
    
      <div className="main row ">
        <div className="div1 col">
          <img src={"starwars_1.jpg"} alt="Logo" />
        </div>
        <LoginForm />
        </div>
       
    )
  }
}

export default Login;
