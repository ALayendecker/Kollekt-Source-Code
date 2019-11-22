const router = require("express").Router();
const itemController = require("../../controllers/itemController");

router.route("/create").post(itemController.create);

router.route("/delete/:id").delete(itemController.remove);

module.exports = router;
