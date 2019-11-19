const router = require("express").Router();
const userController = require("../../controllers/userController");

// // Matches with "/api/user"
// router
//   .route("/")
//   .get(userController.findAll)
//   .post(userController.create);

// // Matches with "/api/user/saved"
// router.route("/saved").get(userController.findAll); //was findById bfore
// // .put(userController.update)
// router.route("/saved/:id").delete(userController.remove);

// router.route("/routeToGetAllFromUser").get(userController.findAll);

module.exports = router;
