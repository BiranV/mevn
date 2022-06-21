const express = require("express");
const router = express.Router();
const API = require("../controllers/api");

router.get("/", API.getAllPosts);
router.post("/", API.createPost);
router.patch("/:id", API.updatePost);
router.delete("/:id", API.deletePost);

module.exports = router;
