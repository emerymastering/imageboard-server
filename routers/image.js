const Image = require("../models").image;

const { Router } = require("express");

const router = new Router();

router.get("/", async (req, res) => {
  const images = await Image.findAll();
  res.send({ message: "List of images", data: images });
});

router.get("/:imageId", async (req, res, next) => {
  try {
    const imageId = req.params.imageId;
    const theImage = await Image.findByPk(imageId);
    console.log("Image data:", theImage);
    theImage = !null
      ? res.send({ message: "Requested image data", data: theImage })
      : res.status(404).send("Image not found");
  } catch (e) {
    next(e);
  }
});

router.post("/create", async (req, res, next) => {
  console.log("Body:", req.body);
  const newImage = await Image.create(req.body);
  res.send(newImage);
});

module.exports = router;
