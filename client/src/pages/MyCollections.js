import React, { Component } from "react";
import AddForm from "../components/AddForm";
import DropdownButton from "../components/DropdownButton";
import Nav from "../components/Nav";
import API from "../utils/API";
import Footer from "../components/Footer";
// import { Redirect } from "react-router-dom";
import Card from "../components/Cards";
import { Link } from "react-router-dom";

class Collection extends Component {
  state = {
    name: "",
    type: "",
    searchAllCollectionsResult: [],
    searchByIdResult: [],
    collectionId: ""
  };
  componentDidMount() {
    this.searchAllCollections();
    console.log("component did indeed mount");
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

  handleFormSubmit = async event => {
    event.preventDefault();
    switch (this.state.type) {
      case "music":
        await this.setState({
          itemFields: ["title", "artist", "album", "genre"]
        });
        break;
      case "comics":
        await this.setState({ itemFields: ["title", "series", "issue"] });
        break;
      default:
        await this.setState({ itemFields: ["title", "author"] });
    }
    const newCollection = {
      name: this.state.name,
      type: this.state.type,
      isPrivate: false,
      itemFields: this.state.itemFields
    };
    console.log(newCollection);
    API.createCollection(newCollection)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };
  setCollectionType = text => {
    this.setState({ type: text });
  };
  searchCollectionById = id => {
    console.log(id);
    // console.log(this.state.collectionId);
    API.getCollectionById(id)
      .then(res => {
        console.log(res.data);
        this.setState({ searchByIdResult: res.data });
      })
      .catch(err => console.log(err));
    this.setState({ collectionId: id });
  };

  deleteCollection = collectionId => {
    API.deleteCollection(collectionId)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <Nav />
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
              <DropdownButton
                onClick={() => this.setCollectionType("currency")}
              >
                Currency
              </DropdownButton>
              <DropdownButton onClick={() => this.setCollectionType("cards")}>
                Cards
              </DropdownButton>
            </AddForm>
            <button onClick={this.handleFormSubmit}>Create Kollection</button>
          </form>
          {this.state.searchAllCollectionsResult.length ? (
            <div className="this should be the List component">
              {this.state.searchAllCollectionsResult.map(collection => (
                <div
                  className="this should be the ListItem component"
                  key={collection._id}
                >
                  <Card {...collection} />
                  <Link to={"/collectiondetails/?id=" + collection._id}>
                    <button>View Kollection</button>
                  </Link>
                  <button onClick={() => this.deleteCollection(collection._id)}>
                    Delete Kollection
                  </button>
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

export default Collection;
