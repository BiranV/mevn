const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: String,
  category: String,
  content: String,
  image: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

const Post = model("Post", postSchema);
module.exports = Post;
