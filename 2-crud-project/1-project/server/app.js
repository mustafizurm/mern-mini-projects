// built in function
const express = require("express");
const app = express();
const cookie_parser = require("cookie-parser");
app.use(cookie_parser());
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: 'http://localhost:5173', // Or use '*' to allow all origins
  }));

//   const corsOptions = {
//     origin: 'http://localhost:5173', // Replace with your frontend URL
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow the necessary methods
//     allowedHeaders: ['Content-Type', 'Authorization'], // Add any custom headers if needed
//     credentials: true, // Allow credentials (cookies, authorization headers, etc.)
//   };
//   app.use(cors(corsOptions));
  

// custom file require and used
const productRoute = require("./routes/product.route");
const userRoute = require("../server/routes/user.route")

// product route
app.use("/api/v1", productRoute)

// user route
app.use("/api/v1", userRoute)


module.exports = app;