import React from "react";

function SetName(props) {
  return (
    <input
      className="dashboard-name-input"
      value={props.name}
      onChange={props.handleInputChange}
      name="name"
      placeholder="Name your collection"
    />
  );
}
export default SetName;
