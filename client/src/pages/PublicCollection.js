import React, { Component } from "react";
import Nav from "../components/Nav";
import API from "../utils/API";
import Card from "../components/Cards";
import Spinner from "../components/layout/Spinner";
import "./publicCollection.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

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
          <div className="container pubmain">
            <div className="row">
              <div className="prof-box mt-5 mb-3">
                <div className="lead">
                  <h3>{this.state.profile.user.username}</h3>
                  <img
                    src={this.state.profile.user.avatar}
                    alt={this.state.profile.user.username}
                  />
                  <p className="profc-p">Status: {this.state.profile.status}</p>
                  <p className="profc-p">
                    Location: {this.state.profile.location}
                  </p>
                  <p className="profc-p">
                    Collector of: {this.state.profile.interests}
                  </p>
                </div>
              </div>
            </div>
            {this.state.profile.collections.length ? (
              <div className="row collection-row justify-content-center">
                {this.state.profile.collections.map(collection => (
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
              <div>
                <div className="justify-content-center">
                  <p className="no-collections">No collections here</p>
                  <div className="col">
                    <Link to="/profiles">
                      <button className="back btn btn-secondary btncenter">
                        Back to Collectors
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Spinner />
        )}
        <Footer />
      </div>
    );
  }
}

export default Public;
