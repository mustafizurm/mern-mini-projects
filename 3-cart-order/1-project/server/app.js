const express = require("express");
const app = express();
const cookie_parser = require("cookie-parser");

app.use(cookie_parser())
app.use(express.json())

// custom file require
const userRoute = require("./routes/user.route")
const productRoute = require("./routes/product.route")
const orderRoute = require("./routes/addToCart.route")

// user route 
app.use("/api", userRoute)

// product route
app.use("/api", productRoute)

// order route
app.use("/api", orderRoute)


app.use((err, req, res, next) => {
    if (!res.headersSent) {
      res.status(500).json({ error: err.message });
    }
  });

module.exports = app;