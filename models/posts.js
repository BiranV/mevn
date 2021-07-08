const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  done: false,
  
});

module.exports = model("Post", postSchema);
