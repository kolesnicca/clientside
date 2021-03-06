const mongoose = require("mongoose");

const citySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
});

const City = mongoose.model("city", citySchema);

module.exports = City;
