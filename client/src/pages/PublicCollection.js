import React, { Component } from "react";
import Nav from "../components/Nav";
import API from "../utils/API";
import Card from "../components/Cards";
import Spinner from "../components/layout/Spinner";

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
      <div>
        <Nav />
        {this.state.profile ? (
          <div className="container main ">
            <div className="row">
              <div className="lead">
                <h3>{this.state.profile.user.username}</h3>
                <img
                  src={this.state.profile.user.avatar}
                  alt={this.state.profile.user.username}
                />
                <p>Status: {this.state.profile.status}</p>
                <p>Location: {this.state.profile.location}</p>
                <p>Collector of: {this.state.profile.interests}</p>
              </div>
            </div>
            {this.state.profile.collections.length ? (
              <div className="row">
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
              <p>No collections here</p>
            )}
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

export default Public;
