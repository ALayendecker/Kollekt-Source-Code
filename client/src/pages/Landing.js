import React, { Component } from "react";
// import Nav from "../components/Nav";
import { Input, FormBtn } from "../components/AddForm";



class Landing extends Component {

    state = {
        name: [],
        type: "",
    
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
        <h1>At least we have something</h1>
        <form>
            <Input
            value={this.state.name}
            onChange={this.handleInputChange}
            name="name"
            placeholder="Name"/>
            <Input
            value={this.state.type}
            onChange={this.handleInputChange}
            name="type"
            placeholder="Type"/>
            <FormBtn
                onClick={this.handleFormSubmit}
              >
                
                Button
            </FormBtn>
        </form>
      </div>
    );
  }
}

export default Landing;
