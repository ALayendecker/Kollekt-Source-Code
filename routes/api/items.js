const router = require("express").Router();
const itemController = require("../../controllers/itemController");

router.route("/create").post(itemController.create);

router.route("/delete/:itemId/:collectionId").delete(itemController.remove);

module.exports = router;
