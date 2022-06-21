const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  done: false,
});

module.exports = mongoose.model("Post", postSchema);
