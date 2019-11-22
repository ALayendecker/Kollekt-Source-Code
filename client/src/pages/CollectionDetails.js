import React, { Component } from "react";
import Nav from "../components/Nav";
import API from "../utils/API";
import Footer from "../components/Footer";
import InputField from "../components/InputField";
import Card from "../components/Cards";
import { Link } from "react-router-dom";

class CollectionDetails extends Component {
  state = {
    newItem: {}
    // collectionId: ""
  };

  componentDidMount() {
    // const idToSearch = new URLSearchParams(this.props.location.search).get(
    //   "id"
    // );
    const idToSearch = this.props.location.state.collectionId;
    // console.log(this.props.location.state.collectionId);
    // console.log("location url spliced = ");
    // console.log(this.props.location.pathname);
    // const idToSearch = "5dd74c9f32ed554f9cb27dba";
    console.log("id to search = " + idToSearch);
    this.searchCollectionById(idToSearch);
  }

  searchCollectionById = id => {
    API.getCollectionById(id)
      .then(res => {
        this.setState({ collection: res.data[0] });
      })
      .catch(err => console.log(err));
  };

  updateNewItem = event => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      newItem: {
        // object that we want to update
        ...prevState.newItem, // keep all other key-value pairs
        [name]: value // update the value of specific key
      }
    }));
    console.log(this.state.newItem);
  };

  createNewItem = async () => {
    await this.setState(prevState => ({
      newItem: {
        // object that we want to update
        ...prevState.newItem, // keep all other key-value pairs
        collectionId: this.state.collection._id // CHANGE THIS TO MAKE IT BETTER
      }
    }));
    console.log("moving to create");
    console.log(this.state.newItem);
    console.log(this.state.collection._id);
    API.createItem(this.state.newItem, this.state.collection._id)
      .then(res => console.log(res)) //that's what it hits
      .catch(err => console.log(err));
  };
  deleteItem = itemId => {
    API.deleteItem(itemId)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <Nav />
        {this.state.collection && (
          <div
            className="this should be the ListItem component"
            key={this.state.collection._id}
          >
            <h1>{this.state.collection._id}</h1>
            <Card {...this.state.collection} />
            <h4>Items</h4>
            {/* would go into card? another component? */}
            {this.state.collection.items.length ? (
              this.state.collection.items.map((item, index) => (
                <div key={index}>
                  <p>{item.title}</p>
                  <button onClick={() => this.deleteItem(item._id)}>
                    Detele Item
                  </button>
                </div>
              ))
            ) : (
              <p>No items to show</p>
            )}
            {this.state.collection.itemFields.map((item, index) => (
              <InputField
                key={index}
                value={this.state.newItem.item}
                onChange={this.updateNewItem}
                name={item}
                placeholder={item}
              />
            ))}
            {/* give the button id of collection id? won't it be on the state anyway? */}
            <button onClick={() => this.createNewItem()}>
              Create New Item
            </button>
          </div>
        )}
        <Link to="/mycollections">
          <button>Back to main page</button>
        </Link>
        <Footer />
      </div>
    );
  }
}

export default CollectionDetails;
