//this is the page that will render as soon as someone logs in
import Footer from "../components/Footer";
import React, { Component } from "react";
import Nav from "../components/Nav";
import Profile from "../components/Profile";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Profile />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
