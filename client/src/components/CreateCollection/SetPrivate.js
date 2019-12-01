import React from "react";

function SetPrivate(props) {
  return (
    <input
      type="checkbox"
      checked={props.isPrivate}
      onChange={props.handleCheckboxChange}
    />
  );
}
export default SetPrivate;
