const express = require("express");
const { getAllProducts, createProduct, getSingProduct, deleteProduct, updateProduct } = require("../controller/product.controller");
const Router = express.Router();

Router.get("/products", getAllProducts)
Router.post("/product/create", createProduct)
Router.get("/product/:id", getSingProduct)
Router.delete("/product/:id", deleteProduct)
Router.put("/product/:id", updateProduct)



module.exports = Router;