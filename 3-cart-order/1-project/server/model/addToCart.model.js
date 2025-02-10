const mongoose = require("mongoose");

const addToCartSchema = mongoose.Schema({
    productId: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true
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
    },
    size: {
        type: String,
    },
    quantity: {
        type: Number,
    }
})

const addToCartModel = mongoose.model("AddToCart", addToCartSchema)

module.exports = addToCartModel;