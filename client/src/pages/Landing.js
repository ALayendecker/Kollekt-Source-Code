import React, { Component } from "react";
import Card from "../components/Cards";
import "./Landing.css";

import AddForm from "../components/AddForm";
import DropdownButton from "../components/DropdownButton";
import Nav from "../components/Nav";
import API from "../utils/API";
import Footer from "../components/Footer";

class Landing extends Component {
  state = {
    name: [],

    type: "cards",
    data: "", //won't be needed, we search right away for now
    searchResult: []
  };

  handleInputChange = async event => {
    const { name, value } = event.target;
    await this.setState({
      [name]: value
    });
    // console.log(this.state.name);
    // console.log(this.state.type);
  };

  //if we search with a input field
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   console.log(this.state.type);
  //   API.getCollectionByType(this.state.type)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err));
  // };

  //if we search with the dropdown
  makeSearch = text => {
    // event.preventDefault();
    console.log(text);
    // await this.setState({ data: text });
    // console.log(this.state.data);
    API.getCollectionByType(text)
      .then(res => {
        console.log(res.data);
        this.setState({ searchResult: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="container justify-content-center">
          <h1>View an existing collection</h1>
          <AddForm text={"Search Collection Type"}>
            <DropdownButton onClick={() => this.makeSearch("music")}>
              Music
            </DropdownButton>
            <DropdownButton onClick={() => this.makeSearch("comics")}>
              Comics
            </DropdownButton>
            <DropdownButton onClick={() => this.makeSearch("currency")}>
              Currency
            </DropdownButton>
            <DropdownButton onClick={() => this.makeSearch("cards")}>
              Cards
            </DropdownButton>
          </AddForm>
          {this.state.searchResult.length ? (
            <div className="this should be the List component row">
              {this.state.searchResult.map((collection, index) => (
                <div
                  className="this should be the ListItem component"
                  key={index}
                >

                  <Card key={collection._id} {...collection}/>
                
                  
                </div>
              ))}
            </div>
          ) : (
            <p>Make a search to see results!</p>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Landing;
