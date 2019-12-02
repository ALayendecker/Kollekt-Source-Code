import React from "react";
import moment from "moment";
import InputField from "../InputField";

function CollectionItems(props) {
  return props.collection.items.length ? (
    props.collection.items.map((item, index) => (
      <div className="form-inline itemBox text-center" key={item._id}>
        {props.collection.itemFields.map(fields =>
          //if this item was selected to be edited, show the values in input fields
          props.editItem.id === item._id ? (
            <InputField
              //show the item info from the database as default, show the new state only for the ones that were changed
              value={
                fields.name in props.itemChanges
                  ? props.itemChanges[fields.name]
                  : props.collection.items[props.editItem.index][fields.name]
              }
              onChange={props.updateExistingItem}
              name={fields.name}
              placeholder={fields.displayName}
              type={fields.type}
              className="inputField"
            />
          ) : // if this item was not selected to be edited, show the field values as normal
          // if it has the name image, display it as an image with the database value as the source, or the collection image if the item has none
          fields.name === "image" ? (
            <img
              height="50px"
              src={item.image || props.collection.image}
              alt="item thumbnail"
            ></img>
          ) : (
            // if it has the type date, moment fixes the format
            <p>
              {fields.type === "date"
                ? moment(item[fields.name]).format("MM-DD-YYYY")
                : item[fields.name]}
            </p>
          )
        )}
        {/* if the collection is being edited but this item was not selected to be edited, show the edit button */}
        {props.editCollection && !props.editItem.id && (
          <button
            onClick={() => props.editItemFunction(item._id, index)}
            className="btn btn-secondary"
          >
            Edit Item
          </button>
        )}
        {/* if this item is being edited, show the buttons to save changes, discard changes and delete it */}
        {props.editItem.id === item._id && (
          <div>
            <button onClick={props.updateItem} className="btn btn-secondary">
              Save Changes
            </button>
            <button onClick={props.cancelUpdate} className="btn btn-secondary">
              Discard Changes
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => props.deleteItem(item._id)}
            >
              Delete Item
            </button>
          </div>
        )}
      </div>
    ))
  ) : (
    // if the collection has no items
    <p>No items to show</p>
  );
}
export default CollectionItems;
