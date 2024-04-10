const mongoose = require("mongoose");

const modelSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  division:  { type: String, required: true }
});

module.exports = mongoose.model("Model", modelSchema);
