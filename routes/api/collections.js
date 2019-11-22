const router = require("express").Router();
const collectionController = require("../../controllers/collectionController");

router.route("/all").get(collectionController.findAll);
router.route("/byid/:id").get(collectionController.findById);
router.route("/bytype/:type").get(collectionController.findByType);
router.route("/create").post(collectionController.create);
router.route("/delete/:id").delete(collectionController.remove);

module.exports = router;
