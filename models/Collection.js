const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CollectionSchema = new Schema({
  name: String,
  type: String,
  isPrivate: {
    type: Boolean,
    default: true
  },
  image: String,
  itemFields: Array,
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item"
    }
  ]
});

const Collection = mongoose.model("Collection", CollectionSchema);

module.exports = Collection;
