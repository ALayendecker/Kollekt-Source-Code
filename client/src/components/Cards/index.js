import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <img
        src={props.image || "/assets/images/comic.jpeg"}
        className="card-img-top"
        alt={props.name}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.type}</p>
        <Link
          to={props.linkInfo || "/collectiondetails"}
          className="btn btn-secondary"
        >
          View This Collection
        </Link>
        {props.deleteFunction && (
          <button
            className="btn btn-danger btn-sm"
            onClick={props.deleteFunction}
          >
            Delete Kollection
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
