const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

router.post(
    "/register",

    check("username")
        .not()
        .isEmpty()
        .withMessage("Username can not be empty")
        .bail()
        .isLength({ min: 8 })
        .withMessage("Username must be at least 8 characters long"),

    check("password")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters long")
        .not()
        .isEmpty()
        .withMessage("Password can not be empty"),

    check("email")
        .isEmail()
        .not()
        .isEmpty()
        .withMessage("Email is not a valid format")
        .custom((email) => {
            return User.findOne({
                email,
            }).then((user) => {
                if (user) {
                    return Promise.reject("Email already taken");
                }
            });
        }),

    async (req, res) => {
        try {
            let { username, email, password } = req.body;
            let userFound = await User.findOne({
                username,
            });

            if (userFound) {
                return res.status(400).json({
                    message: "User already exists",
                });
            }

            const errors = validationResult(req);
            if (!errors.isEmpty()) return res.status(400).json(errors.array());

            const user = new User(req.body);

            let salt = bcrypt.genSaltSync(10);
            let hash = bcrypt.hashSync(password, salt);

            user.password = hash;
            user.save();

            return res.json({
                user,
                message: "Successfully Registered",
            });
        } catch (e) {
            return res.json({
                e,
                message: "Registration Failed",
            });
        }
    }
);

router.post(
    "/login",

    check("username")
        .not()
        .isEmpty()
        .withMessage("Username can not be empty")
        .bail(),

    check("password")
        .not()
        .isEmpty()
        .withMessage("Password can not be empty")
        .bail(),

    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) return res.status(400).json(errors.array());

            const { username, password } = req.body;
            let userFound = await User.findOne({ username });

            if (!userFound) {
                return res.status(400).json({ message: "User does not exist" });
            }

            let isMatch = bcrypt.compareSync(password, userFound.password);

            if (!isMatch) {
                return res.status(400).json({
                    message: "Invalid Credentials",
                });
            }

            jwt.sign(
                {
                    data: userFound,
                },
                process.env.SECRET_KEY,
                {
                    expiresIn: "1d",
                },
                (err, token) => {
                    if (err) {
                        return res.status(400).json({
                            err,
                            message: "Cannot generate token",
                        });
                    }
                    return res.send(token);
                }
            );
        } catch (e) {
            return res.json({
                e,
                message: "Invalid Credentials",
            });
        }
    }
);

module.exports = router;
