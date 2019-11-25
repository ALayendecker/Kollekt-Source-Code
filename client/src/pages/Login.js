import React, { Component } from "react";
// import Nav from "../components/Nav";
import "./Login.css";
import {Link} from "react-router-dom"
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
      <div>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <img src="/assets/images/logo_small.png" alt="logo"></img>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon "></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link " to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
      <div className="main row ">
        <div className="div1 col">
          <img src={"starwars_1.jpg"} alt="Logo" />
        </div>
        <LoginForm />
        </div>
        </div>
    )
  }
}

export default Login;
