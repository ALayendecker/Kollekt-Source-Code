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

  componentDidMount = async () => {
    // const idToSearch = new URLSearchParams(this.props.location.search).get(
    //   "id"
    // );
    // console.log(this.props.match.params.id);
    // const idToSearch = this.props.match.params.id;
    // let idToSearch = "";
    try {
      await this.setState({
        collectionId: this.props.location.state.collectionId
      });
      // idToSearch = this.props.location.state.collectionId;
      console.log("try");
    } catch {
      await this.setState({ collectionId: "5dd74c9f32ed554f9cb27dba" });
      // idToSearch = "5dd74c9f32ed554f9cb27dba";
      console.log("catch");
    }
    // const idToSearch =
    //   this.props.location.state.collectionId || "5dd74c9f32ed554f9cb27dba";
    // console.log("location url spliced = ");
    // console.log(this.props.location.pathname);
    // const idToSearch = "5dd74c9f32ed554f9cb27dba";
    console.log("id to search = " + this.state.collectionId);
    console.log("---------------");
    this.searchCollectionById(this.state.collectionId);
  };

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
  };

  createNewItem = async event => {
    event.preventDefault();
    await this.setState(prevState => ({
      newItem: {
        // object that we want to update
        ...prevState.newItem, // keep all other key-value pairs
        collectionId: this.state.collection._id // CHANGE THIS TO MAKE IT BETTER
      }
    }));
    API.createItem(this.state.newItem)
      .then(async res => {
        console.log(res);
        this.searchCollectionById(this.state.collectionId);
      }) //that's what it hits
      .catch(err => console.log(err));
    // await this.setState({ newItem: {} });
    // console.log(this.state.newItem);
    // this.searchCollectionById(this.state.collectionId);
  };

  deleteItem = itemId => {
    API.deleteItem(itemId, this.state.collection._id)
      .then(res => {
        console.log(res);
        this.searchCollectionById(this.state.collectionId);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        {this.state.collection && (
          <div key={this.state.collection._id}>
            <h1>{this.state.collection._id}</h1>
            <Card {...this.state.collection} />
            <h4>Items</h4>
            {/* would go into card? another component? */}
            {this.state.collection.items.length ? (
              (console.log(this.state.collection),
              this.state.collection.items.map((item, index) => (
                <div key={index}>
                  {this.state.collection.itemFields.map(
                    (fields, otherIndex) => (
                      <div key={otherIndex}>
                        <p>{item[fields.name]}</p>
                      </div>
                    )
                  )}
                  <button onClick={() => this.deleteItem(item._id)}>
                    Detele Item
                  </button>
                </div>
              )))
            ) : (
              <p>No items to show</p>
            )}
            <form className="form-inline">
              {this.state.collection.itemFields.map((item, index) => (
                <div key={index}>
                  <p>{item.displayName}</p>
                  <InputField
                    value={this.state.newItem.item}
                    onChange={this.updateNewItem}
                    name={item.name}
                    placeholder={item.displayName}
                    type={item.type}
                  />
                </div>
              ))}
              {/* give the button id of collection id? won't it be on the state anyway? */}
              <button onClick={this.createNewItem}>Create New Item</button>
            </form>
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
