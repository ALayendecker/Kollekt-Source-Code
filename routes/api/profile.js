const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Profile = require("../../models/Profile");
const User = require("../../models/User");
const Post = require("../../models/Post");

const { check, validationResult } = require("express-validator");
//route     Get api/profile
//desc      test route
//access    public
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate("user", [("username", "avatar")]);
    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Sever Error");
  }
});

//route     Post api/profile
//desc      Create or update user profile
//access    private
router.post(
  "/",
  [
    auth,
    [
      check("status", "Status is required")
        .not()
        .isEmpty(),
      check("interests", "Interests are required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { location, bio, status, interests } = req.body;

    //build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (status) profileFields.status = status;
    if (interests) {
      profileFields.interests = interests
        .split(",")
        .map(interest => interest.trim());
    }
    // // build social groups for collections
    // // these would need to be added to model if wanted just for possible icebox
    // profileFields.social = {};
    // if (discord) profileFields.social.discord = discord;
    // //forums for collectors
    // if (forums) {
    //   profileFields.social.forums = forums;
    // }
    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        //update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }
      //create
      profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// route get api/profiles
// desc get all profiles
//access public
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", [
      "username",
      "avatar"
    ]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// route get api/profiles/user/:user_id
// desc get profile by ID
//access public
router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate("user", ["username", "avatar"]);

    if (!profile)
      return res.status(400).json({ msg: "Profile could not be found" });
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile could not be found" });
    }

    res.status(500).send("Server Error");
  }
});

// route delete api/profile
// desc delete profile, user and posts
// access private
router.delete("/", auth, async (req, res) => {
  try {
    // remove users posts
    await Post.deleteMany({ user: req.user.id });

    //Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: "User removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
