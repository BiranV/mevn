const express = require("express");
const router = express.Router();
const RawData = require("../models/index");

router.get("/", async (req, res) => {
  try {
    const data = await RawData.find();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const data = await RawData.findById(id);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const post = req.body;

  try {
    await RawData.create(post);

    res.status(201).json({ message: "Post created successfulli" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await RawData.findByIdAndUpdate(id, req.body);

    res.status(201).json({ message: "Post updated successfully" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await RawData.findByIdAndDelete(id);

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

module.exports = router;
