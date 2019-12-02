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
    API.getAllCollectionsFromProfile(id)
      .then(res => {
        this.setState({ collections: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        {this.state.collections ? (
          this.state.collections.length > 0 ? (
            <div className="row">
              {this.state.collections.map(collection => (
                <div key={collection._id}>
                  <Card
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
            <p>No Kollections here</p>
          )
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

export default Public;
