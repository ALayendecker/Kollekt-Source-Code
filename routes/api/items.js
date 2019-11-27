const router = require("express").Router();
const itemController = require("../../controllers/itemController");

router.route("/create").post(itemController.create);

router.route("/delete/:itemId/:collectionId").delete(itemController.remove);

router.route("/update/:id").put(itemController.update);

module.exports = router;
