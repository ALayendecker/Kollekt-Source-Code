const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  location: {
    type: String
  },
  bio: {
    type: String
  },
  //placeholder status required ie. primary collection
  status: {
    type: String,
    required: true
  },
  //collections interested in
  interests: {
    type: [String],
    required: true
  },
  collections: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collection"
    }
  ]
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
