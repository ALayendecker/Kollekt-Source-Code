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
          {/* <div className="div1 col">
            <img src={"starwars_1.jpg"} alt="Logo" />
          </div> */}
          <Profile />
          <Dashboardjs />
          <div className="div2 col">
            <div className="wrapper">
              <h1>Your Collections</h1>
              {/* <Card /> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Dashboard;
