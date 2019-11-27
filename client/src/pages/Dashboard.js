//this is the page that will render as soon as someone logs in
import Footer from "../components/Footer";
import React, { Component } from "react";
import Nav from "../components/Nav";
// import Card from "../components/Cards";
// import Profile from "../components/Profile";
import Dashboardjs from "../components/DashboardComp/Dashboardjs";
import Profile from "../components/Profile/index";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="main row ">
          <Profile />
          <Dashboardjs />
        </div>
        <Footer />
      </div>
    );
  }
}
export default Dashboard;
