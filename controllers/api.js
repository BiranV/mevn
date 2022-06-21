const Post = require("../models/posts");
const fs = require("fs");

module.exports = class API {
  static async getAllPosts(req, res) {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  static async createPost(req, res) {
    const post = req.body;
    try {
      await Post.create(post);
      res.status(201).json({ message: "Post created successfully" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async updatePost(req, res) {
    const id = req.params.id;
    const newPost = req.body;
    try {
      await Post.findByIdAndUpdate(id, newPost);
      res.status(200).json({ message: "Post updated successfully" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  static async deletePost(req, res) {
    const id = req.params.id;
    try {
      const result = await Post.findByIdAndDelete(id);
      res.status(200).json({ message: "Post deleted successfully" });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
};