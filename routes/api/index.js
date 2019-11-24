const router = require("express").Router();
const userRoutes = require("./users");
const authRoutes = require("./auth");
const collectionRoutes = require("./collections");
const itemRoutes = require("./items");
const profileRoutes = require("./profile");
const postRoutes = require("./posts");

// user routes
router.use("/profile", profileRoutes);
router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/collections", collectionRoutes);
router.use("/items", itemRoutes);
router.use("/posts", postRoutes);

module.exports = router;
