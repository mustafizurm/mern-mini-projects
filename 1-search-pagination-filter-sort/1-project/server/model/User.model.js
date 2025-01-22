const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "User"
    },
    gender: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    profile: {
        public_url: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true
        }
    },
    following: [
        {
            userId: {
                type: String,
                required: true,
            }
        }
    ],
    followers: [
        {
            userId: {
                type: String,
                required: true
            }
        }
    ],

    createdAt: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model("User", userSchema)
