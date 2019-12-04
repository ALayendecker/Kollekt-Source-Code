import React from "react";
import InputField from "../InputField";

function CreateItem(props) {
  return (
    <div>
      <h5>Add to this collection:</h5>
      <form className="form-inline row">
        {/* show the fields to add a new item based on the collection */}
        {props.itemFields.map((fields, index) => (
          <div key={index} className="divider">
            <p>
              <strong> {fields.displayName}</strong>
            </p>
            <InputField
              value={props.newItem.item}
              onChange={props.updateNewItem}
              name={fields.name}
              placeholder={fields.displayName}
              type={fields.type}
              className="form-control input"
            />
          </div>
        ))}
      </form>
      <button
        className="create btn btn-secondary"
        onClick={props.createNewItem}
      >
        Create New Item
      </button>
      <button
        onClick={props.editCollectionFunction}
        className="btn btn-secondary"
      >
        Edit Collection
      </button>
    </div>
  );
}
export default CreateItem;
