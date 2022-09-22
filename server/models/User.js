const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
    },

    email: {
        type: String,
    },

    password: {
        type: String,
    },

    isAdmin: {
        type: Boolean,
        default: false,
    },

    image: {
        type: String,
    },
});

module.exports = mongoose.model("user", UserSchema);
