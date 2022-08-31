const User = require("../models").user;

const { Router } = require("express");

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.send({ message: "List of users", data: users });
  } catch (e) {
    next(e);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const { email, password, fullName } = req.body;
    // console.log("Body:", req.body);
    if (!email || !password || !fullName) {
      res.status(400).send("missing parameters");
    } else {
      const newUser = await User.create({ email, password, fullName });
      res.send(newUser);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
