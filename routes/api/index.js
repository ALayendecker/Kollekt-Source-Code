const router = require("express").Router();
const userRoutes = require("./users");
const collectionRoutes = require("./collections");
const itemRoutes = require("./items");

// user routes
router.use("/users", userRoutes);
router.use("/collections", collectionRoutes);
router.use("/items", itemRoutes);

module.exports = router;
