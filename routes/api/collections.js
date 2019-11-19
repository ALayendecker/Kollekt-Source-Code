const router = require("express").Router();
const collectionController = require("../../controllers/collectionController");

// Matches with "/api/collection"
// router
//   .route("/")
//   .get(collectionController.findAll)
//   .post(collectionController.create);

// // Matches with "/api/collection/saved"
// router.route("/saved").get(collectionController.findAll); //was findById bfore
// // .put(collectionController.update)
// router.route("/saved/:id").delete(collectionController.remove);

router
  .route("/routeToGetAllFromUserNotPopulate")
  .get(collectionController.findAll);
router
  .route("/routeToGetAllFromUserAndPopulate")
  .get(collectionController.findById);

router.route(".../addCollectionToUser").post(collectionController.create);

module.exports = router;
