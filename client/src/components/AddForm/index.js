import React from "react";
import "./style.css";

export function Input(props) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Search Collection Type
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenu">
        <button className="dropdown-item" type="button">
          Music
        </button>
        <button className="dropdown-item" type="button">
          Comics
        </button>
        <button className="dropdown-item" type="button">
          Currency
        </button>
        <button className="dropdown-item" type="button">
          Cards
        </button>
      </div>
    </div>
  );
}
