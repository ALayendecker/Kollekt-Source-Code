import React, { Component } from "react";
import AddForm from "../components/AddForm";
import DropdownButton from "../components/DropdownButton";
import Nav from "../components/Nav";
import API from "../utils/API";
// import Footer from "../components/Footer";
// import { Redirect } from "react-router-dom";
import Card from "../components/Cards";
// import { Link } from "react-router-dom";

class Collection extends Component {
  state = {
    name: "",
    type: "",
    searchAllCollectionsResult: [],
    isPrivate: true
  };

  componentDidMount() {
    this.searchAllCollections();
  }

  searchAllCollections = () => {
    API.getAllCollections()
      .then(res => {
        console.log(res.data);
        this.setState({ searchAllCollectionsResult: res.data });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleCheckboxChange = async event => {
    await this.setState({ isPrivate: event.target.checked });
    console.log(this.state.isPrivate);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let itemFields = [];
    let image = "";
    switch (this.state.type) {
      case "Music":
        itemFields = [
          { name: "image", type: "text", displayName: "Image" },
          { name: "artist", type: "text", displayName: "Artist" },
          { name: "album", type: "text", displayName: "Album" },
          { name: "genre", type: "text", displayName: "Genre" },
          { name: "date", type: "date", displayName: "Release Date" },
          { name: "quantity", type: "number", displayName: "Quantity" }
        ];
        image = "/assets/images/vinyl.jpg";

        break;
      case "Comics":
        itemFields = [
          { name: "image", type: "text", displayName: "Image" },
          { name: "name", type: "text", displayName: "Title" },
          { name: "series", type: "text", displayName: "Series" },
          { name: "issue", type: "text", displayName: "Issue" },
          { name: "genre", type: "text", displayName: "Genre" },
          { name: "date", type: "date", displayName: "Release Date" },
          { name: "quantity", type: "number", displayName: "Quantity" }
        ];
        image = "/assets/images/comic.jpeg";
        break;
      case "Currency":
        itemFields = [
          { name: "image", type: "text", displayName: "Image" },
          { name: "type", type: "text", displayName: "Type" },
          { name: "country", type: "text", displayName: "Country" },
          { name: "mintMark", type: "text", displayName: "Mint Mark" },
          { name: "year", type: "number", displayName: "Year" },
          { name: "quantity", type: "number", displayName: "Quantity" }
        ];
        image = "/assets/images/coins.jpg";
        break;
      case "Cards":
        itemFields = [
          { name: "image", type: "text", displayName: "Image" },
          { name: "name", type: "text", displayName: "Name" },
          { name: "game", type: "text", displayName: "Game" },
          { name: "type", type: "text", displayName: "Type" },
          { name: "year", type: "number", displayName: "Year" },
          { name: "quantity", type: "number", displayName: "Quantity" }
        ];
        image = "/assets/images/cards.jpg";
        break;
      default:
        return;
    }
    const newCollection = {
      name: this.state.name,
      type: this.state.type,
      isPrivate: this.state.isPrivate,
      itemFields: itemFields,
      image: image
    };
    console.log(newCollection);
    API.createCollection(newCollection)
      .then(res => {
        console.log(res.data);
        this.searchAllCollections();
      })
      .catch(err => console.log(err));
  };

  setCollectionType = text => {
    this.setState({ type: text });
  };

  deleteCollection = collectionId => {
    API.deleteCollection(collectionId)
      .then(res => {
        console.log(res.data);
        this.searchAllCollections();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div>
          <h1>Create a new Kollection</h1>
          <div>
          <form className="form-inline">
            <input
              value={this.state.name}
              onChange={this.handleInputChange}
              name="name"
              placeholder="Name you collection"
              className="input"
            />
            <AddForm text={this.state.type || "Select a type"}>
              <DropdownButton onClick={() => this.setCollectionType("Music")}>
                Music
              </DropdownButton>
              <DropdownButton onClick={() => this.setCollectionType("Comics")}>
                Comics
              </DropdownButton>
              <DropdownButton
                onClick={() => this.setCollectionType("Currency")}
              >
                Currency
              </DropdownButton>
              <DropdownButton onClick={() => this.setCollectionType("Cards")}>
                Cards
              </DropdownButton>
            </AddForm>
            <p>Private</p>
            <input
              type="checkbox"
              checked={this.state.isPrivate}
              onChange={this.handleCheckboxChange}
            />
            <button onClick={this.handleFormSubmit}>Create Kollection</button>
          </form>
          </div>
          <hr></hr>
          <br></br>
          {this.state.searchAllCollectionsResult.length ? (
            <div className="row">
              {this.state.searchAllCollectionsResult.map(collection => (
                <div key={collection._id}>
                  <Card
                    {...collection}
                    deleteFunction={() => this.deleteCollection(collection._id)}
                    linkInfo={{
                      pathname: "/collectiondetails",
                      state: { collectionId: collection._id }
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p>Make a search to see results!</p>
          )}
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Collection;
