import React, { Component } from "react";
import AddForm from "../components/AddForm";
import DropdownButton from "../components/DropdownButton";

import API from "../utils/API"; //new

class Collection extends Component {
  state = {
    name: "",
    type: ""
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    const newCollection = {
      name: this.state.name,
      type: this.state.type,
      isPrivate: false
    };
    console.log(newCollection);
    API.createCollection(newCollection)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };
  setCollectionType = text => {
    this.setState({ type: text });
  };
  render() {
    return (
      <div>
        <h1>Create a new Kollection</h1>;
        <form>
          <input
            value={this.state.name}
            onChange={this.handleInputChange}
            name="name"
            placeholder="Name you collection"
          />
          <AddForm text={this.state.type || "Select a type"}>
            <DropdownButton onClick={() => this.setCollectionType("music")}>
              Music
            </DropdownButton>
            <DropdownButton onClick={() => this.setCollectionType("comics")}>
              Comics
            </DropdownButton>
            <DropdownButton onClick={() => this.setCollectionType("currency")}>
              Currency
            </DropdownButton>
            <DropdownButton onClick={() => this.setCollectionType("cards")}>
              Cards
            </DropdownButton>
          </AddForm>
          <button onClick={this.handleFormSubmit}>Create Kollection</button>
        </form>
      </div>
    );
  }
}

export default Collection;
