const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
    accountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account",
    },

    name: {
        type: String,
    },

    description: {
        type: String,
    },

    amount: {
        type: Number,
    },

    date: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("expense", ExpenseSchema);
