const mongoose = require("mongoose");

const IndexSchema = mongoose.Schema(
  {
    Type: String,
    Time: String,
    TimeUnix: String,
    Status: String,
    Location: String,
    Transceiver: String,
    Approvedby: String,
  },

  { collection: "index" }
);

module.exports = mongoose.model("Index", IndexSchema);
