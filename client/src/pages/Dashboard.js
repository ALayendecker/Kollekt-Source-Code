//this is the page that will render as soon as someone logs in
import Footer from "../components/Footer";
import React, { Component } from "react";
import Nav from "../components/Nav";
import "./Dashboard.css";
// import Card from "../components/Cards";
// import Profile from "../components/Profile";
import Dashboardjs from "../components/DashboardComp/Dashboardjs";
import Profile from "../components/Profile/index";
import CreateCollection from "../components/CreateCollection/CreateCollection";
import API from "../utils/API";

class Dashboard extends Component {
  state = {
    name: "",
    type: "",
    searchAllCollectionsResult: [],
    isPrivate: true
  };

  // collectionsToState = async text => {
  //   await this.setState({ someState: text });
  //   console.log("----hey----");
  //   console.log(this.state.someState);
  // };

  // componentDidMount() {
  //   this.searchAllUserCollections();
  // }

  // searchAllUserCollections = () => {
  //   API.getAllUserCollections()
  //     .then(res => {
  //       console.log(res.data);
  //       this.setState({ searchAllCollectionsResult: res.data });
  //     })
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // console.log(this.state[name]);
  };

  handleCheckboxChange = event => {
    this.setState({ isPrivate: event.target.checked });
  };

  handleFormSubmit = (event, id) => {
    event.preventDefault();
    console.log(id);
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
        case "Other":
        itemFields = [
          { name: "image", type: "text", displayName: "Image" },
          { name: "name", type: "text", displayName: "Name" },
          { name: "category", type: "text", displayName: "Category" },
          { name: "description", type: "text", displayName: "Description" },
          { name: "date", type: "date", displayName: "Date" },
          { name: "quantity", type: "number", displayName: "Quantity" }
        ];
        image = "/assets/images/vinyl.jpg";
        break;
      default:
        return;
    }
    const newCollection = {
      name: this.state.name,
      type: this.state.type,
      isPrivate: this.state.isPrivate,
      itemFields: itemFields,
      image: image,
      profileId: id
    };
    console.log(newCollection);
    API.createCollection(newCollection)
      .then(res => {
        console.log(res.data);
        window.location.reload();
        // this.searchAllCollections(); //replace with a search for your collections
      })
      .catch(err => console.log(err));
  };

  setCollectionType = text => {
    this.setState({ type: text });
  };

  deleteCollection = (collectionId, profileId) => {
    API.deleteCollection(collectionId, profileId)
      .then(res => {
        console.log(res.data);
        window.location.reload();
        // this.searchAllCollections();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="dash-card-margin">
        <Nav />
        <div className="masthead3 pt-5">
          <div className="search-container3">
            {/* Profile isnt actually being used */}
            {/* <Profile /> */}
            {/* <div className="search-container3"> */}
            <Dashboardjs />
            {/* </div> */}
          </div>
          {/* <Collections /> */}
        </div>
        <CreateCollection
          name={this.state.name}
          type={this.state.type}
          isPrivate={this.state.isPrivate}
          handleCheckboxChange={this.handleCheckboxChange}
          setCollectionType={this.setCollectionType}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          deleteCollection={this.deleteCollection}
        />
        <Footer />
      </div>
    );
  }
}
export default Dashboard;
