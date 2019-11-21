import React, { Component } from "react";
import AddForm from "../components/AddForm";
import DropdownButton from "../components/DropdownButton";
import Nav from "../components/Nav";
import API from "../utils/API";
import Footer from "../components/Footer";
// import { Redirect } from "react-router-dom";
import InputField from "../components/InputField";
import Card from "../components/Cards";

class Collection extends Component {
  state = {
    name: "",
    type: "",
    searchAllCollectionsResult: [],
    searchByIdResult: [],
    collectionId: "",
    newItem: {}
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
  handleInputChangeForNewItem = event => {
    const { name, value } = event.target;
    // this.setState({
    //   newItem: {
    //     [name]: value
    //   }
    // });
    this.setState(prevState => ({
      newItem: {
        // object that we want to update
        ...prevState.newItem, // keep all other key-value pairs
        [name]: value // update the value of specific key
      }
    }));
    // console.log(this.state.newItem[name]);
    // console.log(this.state.newItem);
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
  createNewItem = () => {
    console.log(this.state.newItem); //re add that
    API.createItem(this.state.newItem, this.state.collectionId)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    //just do the api call with that oobject. probably need to grab the collection id from the page and send it with.
  };
  deleteItem = itemId => {
    API.deleteItem(itemId)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
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
        {this.state.collectionId ? (
          <div>
            <h1>{this.state.collectionId}</h1>
            {this.state.searchByIdResult.map(collection => (
              <div
                className="this should be the ListItem component"
                key={collection._id}
              >
                <Card {...collection} />
                <h4>Items</h4>
                {/* would go into card? another component? */}
                {collection.items.length ? (
                  collection.items.map((item, index) => (
                    <div>
                      <p key={index}>{item.title}</p>
                      <button onClick={() => this.deleteItem(item._id)}>
                        Detele Item
                      </button>
                    </div>
                  ))
                ) : (
                  <p>No items to show</p>
                )}
                {collection.itemFields.map((item, index) => (
                  <InputField
                    key={index}
                    value={this.state.newItem.item}
                    onChange={this.handleInputChangeForNewItem}
                    name={item}
                    placeholder={item}
                  />
                ))}
                {/* give the button id of collection id? won't it be on the state anyway? */}
                <button onClick={() => this.createNewItem()}>
                  Create New Item
                </button>
              </div>
            ))}
            <button onClick={() => this.searchCollectionById()}>
              Back to main page
            </button>
          </div>
        ) : (
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
                <DropdownButton
                  onClick={() => this.setCollectionType("comics")}
                >
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
                    <button
                      onClick={() => this.searchCollectionById(collection._id)}
                    >
                      View Kollection
                    </button>
                    <button
                      onClick={() => this.deleteCollection(collection._id)}
                    >
                      Delete Kollection
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p>Make a search to see results!</p>
            )}
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default Collection;
