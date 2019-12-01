const router = require("express").Router();
const collectionController = require("../../controllers/collectionController");

router.route("/all").get(collectionController.findAll);
router.route("/byid/:id").get(collectionController.findById);
router.route("/bytype/:type").get(collectionController.findByType);
router.route("/onebytype/:type").get(collectionController.findOneByType);
router.route("/create").post(collectionController.create);
router.route("/delete/:id").delete(collectionController.remove);
router.route("/update/:id").put(collectionController.update);

module.exports = router;
