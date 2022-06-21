const mongoose = require("mongoose");

const HistorySchema = mongoose.Schema(
  {
    Type: String,
    Date: String,
    Transceiver: String,
    LPTR: String,
    HPTR: String,
    Cosite: String,
    Source: String,
    Problem: Array,
    Component: Array,
    Revision: String,
    Burned: String,
    Calibrated: String,
    Tested: String,
    Note: String,
  },

  { collection: "history" }
);

module.exports = mongoose.model("History", HistorySchema);
