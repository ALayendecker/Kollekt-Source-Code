import React, { Component } from "react";
// import Nav from "../components/Nav";
import "./Login.css";
// import {Link} from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Nav from "../components/Nav";

class Login extends Component {
  state = {
    username: "",
    password: "",
    loggedin: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="main row ">
          <div className="div1 col">
            <img src={"starwars_1.jpg"} alt="Logo" />
          </div>
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default Login;
