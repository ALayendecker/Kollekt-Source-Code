import React, { Component, Fragment } from "react";
import Nav from "../components/Nav";
import API from "../utils/API";
import Card from "../components/Cards";
import Spinner from "../components/layout/Spinner";
import "./publicCollection.css";
import Footer from "../components/Footer";
// import { Link } from "react-router-dom";

class Public extends Component {
  state = {
    collections: false
  };
  componentDidMount = () => {
    console.log(this.props.match.params.id);
    this.searchCollectionByProfileId(this.props.match.params.id);
  };

  searchCollectionByProfileId = id => {
    // API.getPublicProfileById(id);
    // API.getAllCollectionsFromProfile(id);
    API.testQuery(id)
      .then(res => {
        console.log(res.data);
        this.setState({ profile: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="main-container prof-row">
        <Nav />

        {this.state.profile ? (
          <Fragment>
            <div className="container pubmain">
              <div className="row">
                <div className="prof-box mt-3 mb-3">
                  <div className="lead">
                    <h3>{this.state.profile.user.username}</h3>
                    <img
                      src={this.state.profile.user.avatar}
                      alt={this.state.profile.user.username}
                    />
                    <p className="profc-p">
                      Status: {this.state.profile.status}
                    </p>
                    <p className="profc-p">
                      Location: {this.state.profile.location}
                    </p>
                    <p className="profc-p">
                      Collector of: {this.state.profile.interests}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {this.state.profile.collections.length ? (
              <div className="pt-4 container row collection-row justify-content-center">
                {this.state.profile.collections.map(collection => (
                  <div className="col-md-4">
                    <Card
                      key={collection._id}
                      {...collection}
                      linkInfo={{
                        pathname: "/collectiondetails/" + collection._id
                        // state: { collectionId: collection._id }
                      }}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="pt-4 container">
                <div className="justify-content-center">
                  <p className="no-collections">No collections here</p>
                  <div className="col">
                    <button
                      onClick={() => window.history.back()}
                      className="back btn btn-secondary btncenter"
                    >
                      Back to Collectors
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Fragment>
        ) : (
          <Spinner />
        )}
        <Footer />
      </div>
    );
  }
}

export default Public;
