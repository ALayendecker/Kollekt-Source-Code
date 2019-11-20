//this is the page that will render as soon as someone opens the website
import React, { Component } from "react";
// import Nav from "../components/Nav";
import { Input } from "../components/AddForm";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

class Landing extends Component {
  state = {
    name: [],
    type: ""
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
        <h1>Search for a collection below</h1>
        <div>
        <form>
          {/* <Input
            value={this.state.name}
            onChange={this.handleInputChange}
            name="name"
            placeholder="Name"
          /> */}
          <Input
            value={this.state.type}
            onChange={this.handleInputChange}
            name="type"
            placeholder="Type"
          />
        </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Landing;
