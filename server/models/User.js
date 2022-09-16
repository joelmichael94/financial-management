const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
    },

    isAdmin: {
        type: Boolean,
        default: false,
    },

    image: {
        type: String,
    },

    occupation: {
        type: String,
    },

    age: {
        type: Number,
    },
});

module.exports = mongoose.model("user", UserSchema);
