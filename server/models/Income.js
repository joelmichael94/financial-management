const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema({
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


});

module.exports = mongoose.model("income", IncomeSchema);
