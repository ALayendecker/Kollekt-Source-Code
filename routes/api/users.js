const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const userController = require("../../controllers/userController");
const User = require("../../models/User");
//route     PST api/users
//desc      Register user
//access    public
router.post(
  "/",
  [
    check("name", "Username is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 8 or more characters"
    ).isLength({ min: 8 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      //check for duplicate users
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ errors: [{ msg: "Email already in use" }] });
      }
      //get users gravatar
      //encrypt password
      //return jwt
      res.send("User route");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }

    console.log(req.body);
    res.send("users route");
  }
);

module.exports = router;
