import React from "react";

function SetPrivate(props) {
  return (
    <input
      className="private-checkbox"
      type="checkbox"
      checked={props.isPrivate}
      onChange={props.handleCheckboxChange}
    />
  );
}
export default SetPrivate;
