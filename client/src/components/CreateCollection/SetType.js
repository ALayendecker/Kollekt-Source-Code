import React from "react";
import AddForm from "../AddForm";
import DropdownButton from "../DropdownButton";

function SetType(props) {
  const typeOptions = ["Music", "Comics", "Currency", "Cards", "Other"];
  return (
    <AddForm text={props.type || props.text}>
      {typeOptions.map((typeOption, index) => (
        <DropdownButton
          key={index}
          onClick={() => props.dropdownFunction(typeOption)}
        >
          {typeOption}
        </DropdownButton>
      ))}
    </AddForm>
  );
}
export default SetType;
