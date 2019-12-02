// this page needs padding/margin at botton to serperate cards from footer
// something is going on with the html page and placing odd spacing that had no element
// need to reduce size of sides of .search-container
// need h3 and p elements to center in flex-container
// need p element to alight under h3 element when no cards display
import React, { Component } from "react";
import Card from "../components/Cards";
import "./Landing.css";
// import {connect} from "react-redux";
// import PropTypes from "prop-types";
// import AddForm from "../components/AddForm";
// import DropdownButton from "../components/DropdownButton";
import Nav from "../components/Nav";
import API from "../utils/API";
import Footer from "../components/Footer";
import SetType from "../components/CreateCollection/SetType";

class Landing extends Component {
  state = {
    searchResult: []
  };

  componentDidMount = () => {
    API.getOneCollectionByType("Music")
      .then(res => {
        console.log(res.data);
        this.setState({
          searchResult: this.state.searchResult.concat(res.data)
        });
      })
      .catch(err => console.log(err));
    API.getOneCollectionByType("Comics")
      .then(res => {
        console.log(res.data);
        this.setState({
          searchResult: this.state.searchResult.concat(res.data)
        });
      })
      .catch(err => console.log(err));
    API.getOneCollectionByType("Currency")
      .then(res => {
        console.log(res.data);
        this.setState({
          searchResult: this.state.searchResult.concat(res.data)
        });
      })
      .catch(err => console.log(err));
    API.getOneCollectionByType("Cards")
      .then(res => {
        console.log(res.data);
        this.setState({
          searchResult: this.state.searchResult.concat(res.data)
        });
      })
      .catch(err => console.log(err));
  };

  makeSearch = collectionType => {
    this.setState({ currenSearchType: collectionType });
    API.getCollectionByType(collectionType)
      .then(res => {
        console.log(res.data);
        this.setState({ searchResult: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="main-container">
        <Nav />
        <div className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center ">
              <div className="text-center search-container">
                <h1 className="font-weight-light">A smarter way to collect.</h1>
                <SetType
                  text={"Search Collection Type"}
                  dropdownFunction={this.makeSearch}
                  type={this.state.currenSearchType}
                />
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-center">View existing collections</h3>
        <hr />
        <div className="">
          <div data-aos="fade-up">
            {this.state.searchResult.length ? (
              <div className="row rowlog">
                {this.state.searchResult.map(collection => (
                  <Card
                    key={collection._id}
                    {...collection}
                    linkInfo={{
                      pathname: "/collectiondetails/" + collection._id
                      // state: { collectionId: collection._id }
                    }}
                  />
                ))}
             </div>
            ) : (
              <div className="divBaby">
                <p>Make a search to see results!</p>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Landing;
