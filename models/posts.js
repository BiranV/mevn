const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  description: {
    type: String,
    // required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  done: false,
});

module.exports = mongoose.model("Post", postSchema);
