import React from "react";

function SetName(props) {
  return (
    <input
      value={props.name}
      onChange={props.handleInputChange}
      name="name"
      placeholder="Name you collection"
    />
  );
}
export default SetName;
