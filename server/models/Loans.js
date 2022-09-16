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
});

module.exports = mongoose.model("loan", LoanSchema);
