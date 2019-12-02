import React from "react";
import InputField from "../InputField";

function EditCollection(props) {
  return (
    <div className="row">
      <p>
        <strong>Name</strong>
      </p>
      <InputField
        value={
          "name" in props.collectionChanges
            ? props.collectionChanges.name
            : props.collection.name
        }
        onChange={props.updateEditCollection}
        name="name"
        placeholder="Name"
        type="text"
        className="inputField input"
      />

      <p>
        <strong>Image</strong>
      </p>
      <InputField
        value={
          "image" in props.collectionChanges
            ? props.collectionChanges.image
            : props.collection.image
        }
        onChange={props.updateEditCollection}
        name="image"
        placeholder="Image"
        type="text"
        className="inputField input"
      />
      <p>Private</p>
      <input
        type="checkbox"
        name="isPrivate"
        checked={props.collectionChanges.isPrivate}
        onChange={props.handleCheckboxChange}
      />
      <button onClick={props.updateCollection} className="btn btn-secondary">
        Save Changes
      </button>
      <button onClick={props.cancelUpdate} className="btn btn-secondary">
        Discard Changes
      </button>
      <button onClick={props.deleteCollection} className="btn btn-danger">
        Delete Collection
      </button>
    </div>
  );
}
export default EditCollection;
