const router = require("express").Router();
const itemController = require("../../controllers/itemController");

// // Matches with "/api/item"
// router
//   .route("/")
//   .get(itemController.findAll)
//   .post(itemController.create);

// // Matches with "/api/item/saved"
// router.route("/saved").get(itemController.findAll); //was findById bfore
// // .put(itemController.update)
// router.route("/saved/:id").delete(itemController.remove);

//a few of them will probably go in the same route

// router.route("/routeToUpdateOne").get(itemController.update);

// router.route(".../addItemToCollection").post(itemController.create);

//
router.route("/create").post(itemController.create);
router.route("/delete/:id").delete(itemController.remove);

module.exports = router;
