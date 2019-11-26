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
    editCollection: false
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
    if (this.state.newItem.year) {
      await this.setState(prevState => ({
        newItem: {
          ...prevState.newItem,
          year: moment(this.state.newItem.year).format("DD-MM-YYYY")
        }
      }));
    }
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

  editCollection = async () => {
    console.log(this.state.collection.isPrivate);
    // this.setState({ editCollection: true, collectionChanges: {}, itemsToUpdate:["image, name"] });
    // this.setState({ collectionChanges: this.state.collection });
    await this.setState({
      editCollection: true,
      collectionChanges: { isPrivate: true }
    });
  };

  updateEditCollection = event => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      collectionChanges: {
        // object that we want to update
        ...prevState.collectionChanges, // keep all other key-value pairs
        [name]: value // update the value of specific key
      }
    }));
    console.log(this.state.collectionChanges);
  };

  handleCheckboxChange = async event => {
    console.log("handleCheckboxChange");
    console.log(event.target.checked);
    const checkedStatus = event.target.checked;
    await this.setState(prevState => ({
      collectionChanges: {
        // object that we want to update
        ...prevState.collectionChanges, // keep all other key-value pairs
        isPrivate: checkedStatus // update the value of specific key
      }
    }));
    // await this.setState({ test: event.target.checked });
    // console.log(this.state.test);
    // this.setState({ isPrivate: event.target.checked });
    console.log(this.state.collectionChanges);
  };

  updateCollection = () => {
    console.log(this.state.collectionChanges);
    API.updateCollection(
      this.state.collection._id,
      this.state.collectionChanges
    )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        {this.state.collection && (
          <div key={this.state.collection._id} className="maincontainer">
            <br></br>

            <img src={this.state.collection.image} alt="..." />

            <br></br>
            <br></br>

            <h6>COLLECTION NAME: {this.state.collection.name}</h6>
            <button onClick={this.editCollection}>Edit Kollektion</button>
            <hr></hr>
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
                <input
                  type="checkbox"
                  name="isPrivate"
                  checked={
                    this.state.collectionChanges.isPrivate
                    // this.state.collection.isPrivate
                  }
                  onChange={this.handleCheckboxChange}
                />
                <button onClick={this.updateCollection}>Save Changes</button>
              </div>
            )}
            <div>
              <form className="form-inline">
                {this.state.collection.itemFields.map((item, index) => (
                  <div key={index} className="divider">
                    <p>
                      <strong> {item.displayName}</strong>
                    </p>
                    <InputField
                      value={this.state.newItem.item}
                      onChange={this.updateNewItem}
                      name={item.name}
                      placeholder={item.displayName}
                      type={item.type}
                      className="inputField"
                    />
                  </div>
                ))}
              </form>
              <button className="create" onClick={this.createNewItem}>
                Create New Item
              </button>
            </div>
            <br></br>
            {/* <Card {...this.state.collection} /> */}
            <h5>Items</h5>
            {/* would go into card? another component? */}

            {this.state.collection.items.length ? (
              this.state.collection.items.map(item => (
                <div
                  className="form-inline card-title text-center"
                  key={item._id}
                >
                  {/* {test ={(100 / this.state.collection.itemFields.length)}} */}
                  {/* {(test = 100 / this.state.collection.itemFields.length)} */}
                  {this.state.collection.itemFields.map(
                    (fields, otherIndex) => (
                      <div
                        // style={{
                        //   width:
                        //     100 /
                        //       (this.state.collection.itemFields.length + 1) +
                        //     "%"
                        // }}
                        key={otherIndex}
                      >
                        <p>
                          <strong> {fields.displayName} </strong>
                        </p>
                        <p>{item[fields.name]}</p>
                      </div>
                    )
                  )}
                  <button onClick={() => this.deleteItem(item._id)}>
                    Detele Item
                  </button>
                </div>
              ))
            ) : (
              <p>No items to show</p>
            )}
          </div>
        )}

        <br></br>
        <br></br>

        <Link to="/mycollections">
          <button className="back">Back to collections</button>
        </Link>
        <Footer />
      </div>
    );
  }
}

export default CollectionDetails;
