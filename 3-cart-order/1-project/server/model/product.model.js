const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  pName: {
    type: String,
    required: true,
  },
  pDescription: {
    type: String,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: true,
  },
  newPrice: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },

});

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
