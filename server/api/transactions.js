const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");
const auth = require("../middleware/auth");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");

// CLIENT REQUESTS
// GET ALL TRANSACTIONS
router.get("/", auth, async (req, res) => {
    try {
        let transactions = await Transaction.find({
            userId: req.user._id,
        });
        if (transactions.length == 0)
            return res.json({ message: "No transactions found" });

        return res.json(transactions);
    } catch (e) {
        return res.status(400).json({
            e,
            message: "Cannot retrieve transactions",
        });
    }
});

// GET WEEKLY TRANSACTIONS
router.get("/weekly", auth, async (req, res) => {
    try {
        let transactions = await Transaction.find({ userId: req.user._id });

        if (transactions.length == 0) {
            return res.json({ message: "No weekly transactions found" });
        }

        const now = new Date();
        const firstDay = new Date(
            now.setDate(
                now.getDate() - now.getDay() + (now.getDay() === 0 ? -6 : 1)
            )
        );
        const lastDay = new Date(
            now.setDate(now.getDate() - (now.getDay() - 1) + 6)
        );

        const filters = {
            date: {
                $gte: firstDay,
                $lt: lastDay,
            },
        };

        return res.json(transactions.find({}).where(filters));
    } catch (e) {
        return res.status(400).json({
            e,
            message: "Failed to fetch weekly transactions",
        });
    }
});

// GET TRANSACTION BY ID
router.get("/:id", auth, async (req, res) => {
    try {
        let transaction = await Transaction.findById(req.params.id);

        if (!transaction) return res.json({ message: "Transaction not found" });

        return res.json(transaction);
    } catch (e) {
        return res.status(400).json({
            e,
            message: "Transaction cannot be found",
        });
    }
});

router.post("/", auth, async (req, res) => {
    try {
        let form = new formidable.IncomingForm();

        form.parse(req, async (e, fields, files) => {
            // transaction name check
            if (
                fields.name.length < 3 ||
                fields.name.length == 0 ||
                fields.name.length == ""
            )
                return res.status(400).json({
                    message:
                        "Transaction name must be at least 3 characters long",
                });

            //transaction type check
            if (
                fields.transactionType.length == 0 ||
                fields.transactionType.length == ""
            )
                return res
                    .status(400)
                    .json({ message: "Please select a transaction type" });

            //transaction category check
            if (fields.category.length == 0 || fields.category.length == "")
                return res
                    .status(400)
                    .json({ message: "Please select a category" });

            const transaction = new Transaction(fields);

            if (files.image) {
                let oldPath = files.image.filepath;
                let newPath =
                    path.join(__dirname, "../public") +
                    `/${files.image.newFilename}-${files.image.originalFilename}`;
                let rawData = fs.readFileSync(oldPath);
                fs.writeFileSync(newPath, rawData);
                transaction.image = `/${files.image.newFilename}-${files.image.originalFilename}`;
            }
            await transaction.save();

            return res.json({
                transaction,
                message: "Transaction added successfully",
            });
        });
    } catch (e) {
        return res.status(400).json({ e, message: "Cannot add transaction" });
    }
});

router.delete("/:id", auth, async (req, res) => {
    try {
        let transaction = await Transaction.findByIdAndDelete(req.params.id);
        return res.json({
            transaction,
            message: "Transaction successfully deleted",
        });
    } catch (e) {
        return res.status(400).json({
            e,
            message: "Failed to delete transaction",
        });
    }
});

router.put("/:id", auth, async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        if (!transaction)
            return res.json({ message: "Transaction does not exist" });

        const form = new formidable.IncomingForm();

        form.parse(req, async (e, fields, files) => {
            if (files.image.name !== "") {
                let oldPath = files.image.filepath;
                let newPath =
                    path.join(__dirname, "../public") +
                    `/${files.image.newFilename}-${files.image.originalFilename}`;
                let rawData = fs.readFileSync(oldPath);
                fs.writeFileSync(newPath, rawData);
                transaction.image = `/${files.image.newFilename}-${files.image.originalFilename}`;
                await transaction.save();
            }

            delete fields.image;
            await Transaction.findOneAndUpdate(
                {
                    id: req.params.id,
                },
                fields,
                {
                    new: true,
                }
            );

            return res.json({
                transaction,
                message: "Transaction updated successfully",
            });
        });
    } catch (e) {
        return res.status(400).json({
            e,
            message: "Cannot edit transaction",
        });
    }
});

module.exports = router;
