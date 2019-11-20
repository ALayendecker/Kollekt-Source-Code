import React from "react";
import "./style.css";

function AddForm(props) {
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
        {props.text}
      </button>
      <div
        {...props}
        className="dropdown-menu"
        aria-labelledby="dropdownMenu"
      ></div>
    </div>
  );
}
export default AddForm;
