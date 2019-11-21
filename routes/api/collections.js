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

//a few of them will probably go in the same route

// router
//   .route("/routeToGetAllFromUserNotPopulate")
//   .get(collectionController.findAllInUser);

// router
//   .route("/routeToGetAllFromUserAndPopulate")
//   .get(collectionController.findById);

// router
//   .route("/routeToGetAllPublicWithQuery")
//   .get(collectionController.findAllPublicWithQuery);

// router.route("/routeToUpdateOne").get(collectionController.update);

// router.route(".../addCollectionToUser").post(collectionController.create);

router.route("/all").get(collectionController.findAll);
router.route("/byid/:id").get(collectionController.findById);
router.route("/bytype/:type").get(collectionController.findByType);
router.route("/create").post(collectionController.create);

module.exports = router;
