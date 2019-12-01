import React from "react";
import AddForm from "../AddForm";
import DropdownButton from "../DropdownButton";

function SetType(props) {
  return (
    <AddForm text={props.type || "Select a type"}>
      <DropdownButton onClick={() => props.setCollectionType("Music")}>
        Music
      </DropdownButton>
      <DropdownButton onClick={() => props.setCollectionType("Comics")}>
        Comics
      </DropdownButton>
      <DropdownButton onClick={() => props.setCollectionType("Currency")}>
        Currency
      </DropdownButton>
      <DropdownButton onClick={() => props.setCollectionType("Cards")}>
        Cards
      </DropdownButton>
    </AddForm>
  );
}
export default SetType;
