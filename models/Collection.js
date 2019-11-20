const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CollectionSchema = new Schema({
  name: String,
  type: String, //coins, cds, cards, etc....
  isPrivate: {
    type: Boolean,
    default: true
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item"
    }
  ]
});

const Collection = mongoose.model("Collection", CollectionSchema);

module.exports = Collection;
