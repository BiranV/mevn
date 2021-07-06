const { Router } = require("express");
const Post = require("../models/posts");
const multer = require("multer");
const fs = require("fs");

const router = Router();

//multer middleware
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});

let upload = multer({
  storage: storage,
}).single("image");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const post = req.body;
  const imagename = req.file.filename;
  post.image = imagename;

  try {
    await Post.create(post);
    res.status(201).json({ message: "Post created successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  let new_image = "";
  if (req.file) {
    new_image = req.file.filename;
    try {
      fs.unlinkSync("./uploads/" + req.body.old_image);
    } catch (error) {
      console.log(error);
    }
  } else {
    new_image = req.body.old_image;
  }
  const newPost = req.body;
  newPost.image = new_image;

  try {
    await Post.findByIdAndUpdate(id, newPost);
    res.status(200).json({ message: "Post updated successfully!" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Post.findByIdAndDelete(id);
    if (result.image != "") {
      try {
        fs.unlinkSync("./uploads/" + result.image);
      } catch (error) {
        console.log(error);
      }
    }
    res.status(200).json({ message: "Post deleted successfully!" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
