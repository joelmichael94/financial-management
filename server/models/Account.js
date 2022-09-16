const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    name: {
        type: String,
    },

    description: {
        type: String,
    },

    incomeTotal: {
        type: Number,
    },

    expenseTotal: {
        type: Number,
    },

    loansTotal: {
        type: Number,
    },

    balance: {
        type: Number,
    },
});

module.exports = mongoose.model("account", AccountSchema);
