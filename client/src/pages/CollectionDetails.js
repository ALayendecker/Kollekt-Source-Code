import React, { Component } from "react";
import Nav from "../components/Nav";
import API from "../utils/API";
import Footer from "../components/Footer";
import InputField from "../components/InputField";
// import Card from "../components/Cards";
import { Link } from "react-router-dom";
import "./CollectionDetails.css";
import moment from "moment";

class CollectionDetails extends Component {
  state = {
    newItem: {},
    editCollection: false,
    editItem: false,
    itemChanges: {}
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
        ...prevState.newItem,
        collectionId: this.state.collection._id
      }
    }));
    // if (this.state.newItem.year) {
    //   await this.setState(prevState => ({
    //     newItem: {
    //       ...prevState.newItem,
    //       year: moment(this.state.newItem.year).format("DD-MM-YYYY")
    //     }
    //   }));
    // }
    API.createItem(this.state.newItem)
      .then(async res => {
        console.log(res);
        this.searchCollectionById(this.state.collectionId);
      })
      .catch(err => console.log(err));
  };

  deleteItem = itemId => {
    API.deleteItem(itemId, this.state.collection._id)
      .then(res => {
        console.log(res);
        this.searchCollectionById(this.state.collectionId);
        this.setState({ editItem: false, itemChanges: {} });
      })
      .catch(err => console.log(err));
  };

  editCollectionFunction = async () => {
    await this.setState({
      editCollection: true,
      collectionChanges: { isPrivate: true }
    });
  };

  updateEditCollection = event => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      collectionChanges: {
        ...prevState.collectionChanges,
        [name]: value
      }
    }));
    console.log(this.state.collectionChanges);
  };

  handleCheckboxChange = async event => {
    //needed to make another const for scope reasons
    const checkedStatus = event.target.checked;
    await this.setState(prevState => ({
      collectionChanges: {
        ...prevState.collectionChanges,
        isPrivate: checkedStatus
      }
    }));
  };

  updateCollection = () => {
    API.updateCollection(
      this.state.collection._id,
      this.state.collectionChanges
    )
      .then(res => {
        console.log(res);
        this.searchCollectionById(this.state.collectionId);
        this.setState({
          editItem: false,
          itemChanges: {},
          editCollection: false
        });
      })
      .catch(err => console.log(err));
  };

  editItemFunction = async (id, index) => {
    if (id === this.state.collection.items[index]._id) {
      console.log("it matches");
      //setting the state here assures that it will remain false if something goes wrong. I'm double checking that I'm getting the right item
      await this.setState({
        editItem: { id: id, index: index }
        // itemChanges: this.state.collection.items[index]
      });
    }
    console.log(this.state.editItem);
  };

  updateExistingItem = async event => {
    const { name, value } = event.target;
    await this.setState(prevState => ({
      itemChanges: {
        // object that we want to update
        ...prevState.itemChanges, // keep all other key-value pairs
        [name]: value // update the value of specific key
      }
    }));
    console.log(this.state.itemChanges);
  };

  cancelUpdate = target => {
    // event.preventDefault();
    this.setState({
      editItem: false,
      itemChanges: {}
      // editCollection: false
    });
    if (target === "collection") {
      this.setState({ editCollection: false });
    }
  };

  updateItem = () => {
    // if (this.state.itemChanges.year) {
    //   await this.setState(prevState => ({
    //     itemChanges: {
    //       ...prevState.itemChanges,
    //       year: moment(this.state.itemChanges.year).format("DD-MM-YYYY")
    //     }
    //   }));
    // }
    API.updateItem(this.state.editItem.id, this.state.itemChanges)
      .then(res => {
        console.log(res);
        this.searchCollectionById(this.state.collectionId);
        this.setState({ editItem: false, itemChanges: {} });
      })
      .catch(err => console.log(err));
  };

  deleteCollection = () => {
    API.deleteCollection(this.state.collection._id)
      .then(res => {
        console.log(res.data);
        this.setState({ collection: false });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        {/* if there is a collection, render it */}
        {this.state.collection && (
          <div key={this.state.collection._id} className="maincontainer">
            <br></br>
            <img
              className="collectionPic"
              src={this.state.collection.image}
              alt={this.state.collection.name}
            />
            <br></br>
            <br></br>
            <h6>
              COLLECTION NAME:
              <span style={{ fontWeight: "bolder", fontSize: 25 }}>
                {this.state.collection.name}
              </span>
            </h6>
            <button onClick={this.editCollectionFunction}>
              Edit Kollektion
            </button>
            <hr></hr>
            {/* if the user clicked the Edit Kollektion button, show the options to edit the collection */}
            {this.state.editCollection && (
              <div className="row">
                <p>
                  <strong>Name</strong>
                </p>
                <InputField
                  value={
                    this.state.collectionChanges.name ||
                    this.state.collection.name
                  }
                  onChange={this.updateEditCollection}
                  name="name"
                  placeholder="Name"
                  type="text"
                  className="inputField"
                />

                <p>
                  <strong>Image</strong>
                </p>
                <InputField
                  value={
                    this.state.collectionChanges.image ||
                    this.state.collection.image
                  }
                  onChange={this.updateEditCollection}
                  name="image"
                  placeholder="Image"
                  type="text"
                  className="inputField"
                />
                <p>Private</p>
                <input
                  type="checkbox"
                  name="isPrivate"
                  checked={this.state.collectionChanges.isPrivate}
                  onChange={this.handleCheckboxChange}
                />
                <button onClick={this.updateCollection}>Save Changes</button>
                <button onClick={() => this.cancelUpdate("collection")}>
                  Discard Changes
                </button>
                <button onClick={this.deleteCollection}>
                  Delete Collection
                </button>
              </div>
            )}
            <div>
              <h5>Add to this collection:</h5>
              <form className="form-inline">
                {/* show the fields to add a new item based on the collection */}
                {this.state.collection.itemFields.map((fields, index) => (
                  <div key={index} className="divider">
                    <p>
                      <strong> {fields.displayName}</strong>
                    </p>
                    <InputField
                      value={this.state.newItem.item}
                      onChange={this.updateNewItem}
                      name={fields.name}
                      placeholder={fields.displayName}
                      type={fields.type}
                      className="form-control input"
                    />
                  </div>
                ))}
              </form>
              <button
                className="create btn btn-secondary"
                onClick={this.createNewItem}
              >
                Create New Item
              </button>
            </div>
            <hr />
            <h5>Items in your collection:</h5>
            <br />
            {/* if the collection has items, show them */}
            {this.state.collection.items.length ? (
              this.state.collection.items.map((item, index) => (
                <div className="form-inline itemBox text-center" key={item._id}>
                  {/* {this.state.editItem === item._id
                    ?  */}
                  {this.state.collection.itemFields.map((fields, index) => (
                    <div key={index} className="divider">
                      {/* if this item was selected to be edited, show the values in input fields */}
                      {this.state.editItem.id === item._id ? (
                        // {/* !!-need to make a header for the column names!! */}
                        // year: moment(this.state.itemChanges.year).format("DD-MM-YYYY")

                        <InputField
                          // value={
                          //   fields.type === "date"
                          //     ? moment(
                          //         this.state.itemChanges[fields.name]
                          //       ).format("DD-MM-YYYY")
                          //     : this.state.itemChanges[fields.name]
                          // }
                          // value={
                          //   this.state.itemChanges[fields.name] ||
                          // this.state.collection.items[
                          //   this.state.editItem.index
                          // ][fields.name]
                          // }
                          //show the item info from the database as default, show the new state only for the ones that were changed
                          value={
                            fields.name in this.state.itemChanges
                              ? // this.state.itemChanges[fields.name]
                                this.state.itemChanges[fields.name]
                              : this.state.collection.items[
                                  this.state.editItem.index
                                ][fields.name]
                          }
                          onChange={this.updateExistingItem}
                          name={fields.name}
                          placeholder={fields.displayName}
                          // type={fields.type === "date" ? "text" : fields.type}
                          type={fields.type}
                          className="inputField"
                        />
                      ) : (
                        // if this item was not selected to be edited, show the field values as normal. if it has the type date, moment fixes the format
                        <p>
                          {fields.type === "date"
                            ? moment(item[fields.name]).format("MM-DD-YYYY")
                            : item[fields.name]}
                        </p>
                      )}
                    </div>
                  ))}
                  {/* if the collection is being edited but this item was not selected to be edited, show the edit button */}
                  {this.state.editCollection && !this.state.editItem.id && (
                    <button
                      onClick={() => this.editItemFunction(item._id, index)}
                    >
                      Edit Item
                    </button>
                  )}
                  {/* if this item is being edited, show the buttons to save changes, discard changes and delete it */}
                  {this.state.editItem.id === item._id && (
                    <div>
                      <button onClick={this.updateItem}>Save Changes</button>
                      <button onClick={() => this.cancelUpdate("item")}>
                        Discard Changes
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={() => this.deleteItem(item._id)}
                      >
                        Delete Item
                      </button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              // if the collection has no items
              <p>No items to show</p>
            )}
          </div>
        )}

        <br></br>
        <br></br>

        <Link to="/mycollections">
          <button className="back btn btn-secondary">
            Back to collections
          </button>
        </Link>
        <Footer />
      </div>
    );
  }
}

export default CollectionDetails;
