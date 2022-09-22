const mongoose = require("mongoose");

const LoanSchema = new mongoose.Schema({
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
        default: 0,
    },

    date: {
        startYear: {
            type: Number,
        },
        startMonth: {
            type: Number,
        },
        endYear: {
            type: Number,
        },
        endMonth: {
            type: Number,
        },
    },

    image: {
        type: String,
    },
});

module.exports = mongoose.model("loan", LoanSchema);
