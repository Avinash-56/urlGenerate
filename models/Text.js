const mongoose = require("mongoose");

const textSchema = mongoose.Schema({
  note: { type: String, required: true },
  url: { type: String, required: true },

  created_at: { type: Date, default: Date.now() },
});

module.exports = Text = mongoose.model("text", textSchema);
