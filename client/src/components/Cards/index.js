import React from "react";
import "./style.css";


function Card(props) {
    return (
<div className="card">
  <img src="/assets/images/comic.jpeg" className="card-img-top" alt="..."></img>
  <div className="card-body">
<h5 className="card-title">{props.name}</h5>
<p className="card-text">{props.type}</p>
      {/* need to make click function to take to collection associated with card */}
    <a href="#" className="btn btn-secondary">View This Collection</a>
  </div>
</div>
);
}

export default Card;
