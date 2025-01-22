const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please Enter product name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "please Enter product Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter product price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images:[
    {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
  ],
  category: {
    type: String,
    require: [true, "Please enter product category"],
  },
  Stock: {
    type: Number,
    required: [true, "Please enter product Stock"],
    maxLength: [4, "Stock can not exceed 4 character"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports =  mongoose.model("Product", productSchema);
