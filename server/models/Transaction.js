const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    transactionType: {
        type: String,
    },

    name: {
        type: String,
    },

    description: {
        type: String,
        default: "",
    },

    amount: {
        type: Number,
        default: 0,
    },

    image: {
        type: String,
    },

    category: {
        type: String,
    },

    date: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("transaction", TransactionSchema);
