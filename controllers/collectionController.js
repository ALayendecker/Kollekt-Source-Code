const db = require("../models");
//edit the functions as we go
module.exports = {
  findAllInUser: function(req, res) {
    db.Collection.find(req.query) //req.query would be the filter for the user. get all collections from the user and don't fill them
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllPublicWithQuery: function(req, res) {
    db.Collection.find(req.query) //req.query would have { isPrivate : false, [key] : [value]}, where [key] : [value] are the search parameters
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Collection.findById(req.params.id) //get one collection by id and fill it with all items
      .populate("items")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Collection.create(req.body)
      .then(function(dbCollection) {
        return db.User.findOneAndUpdate(
          //do I keep the return?
          { id: SOME_ID_PARAMETER }, //get the id from the User I'm adding the Collection to
          { $push: { collections: dbCollection._id } },
          { new: true }
        );
      })
      .then(function(dbUser) {
        res.json(dbUser);
      })
      .catch(function(err) {
        res.json(err);
      });
  },
  update: function(req, res) {
    db.Collection.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  // remove: function(req, res) {
  //   db.Collection.findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
