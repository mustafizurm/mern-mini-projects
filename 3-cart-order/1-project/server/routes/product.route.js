const express = require("express");
const { createProduct, getAllProducts, getProduct, deleteProduct } = require("../controller/product.controller");
const auth = require("../midelware/authentication");
const Router = express.Router();

Router.post("/product/create", auth, createProduct)
Router.get("/products", getAllProducts)
Router.get("/product/:id", auth, getProduct)
Router.delete("/product/:id", auth, deleteProduct)

module.exports = Router;