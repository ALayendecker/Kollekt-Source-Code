const db = require("../models");
//edit the functions as we go
module.exports = {
  // findAll: function(req, res) {
  //   db.Item.find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findById: function(req, res) {
  //   db.Item.findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  create: function(req, res) {
    console.log("hit item controller");
    console.log(req.body.newItem);
    const collectionId = req.body.collectionId;
    db.Item.create(req.body.newItem)
      .then(function(dbItem) {
        console.log("---------");
        console.log(dbItem);
        console.log(collectionId);
        return db.Collection.findOneAndUpdate(
          //do I keep the return?
          { _id: collectionId }, //get the id from the collection I'm adding the item to
          { $push: { items: dbItem._id } },
          { new: true }
        );
      })
      .then(function(dbCollection) {
        res.json(dbCollection);
      })
      .catch(function(err) {
        res.json(err);
      });
  },
  update: function(req, res) {
    db.Item.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // remove: function(req, res) {
  //   db.Item.findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
  remove: function(req, res) {
    db.Item.remove({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
