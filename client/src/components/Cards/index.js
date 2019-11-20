import React from "react";
import "./style.css";


function Card(props) {
    return (
<div className="card">
  <img src="/assets/images/comic.jpeg" className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Needs to be pulled from database</h5>
    <p className="card-text">What do you want in this?</p>
    <a href="#" className="btn btn-secondary">Go to Collection associated with pic</a>
  </div>
</div>
);
}

export default Card;
