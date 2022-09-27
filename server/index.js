const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());

require("dotenv").config();
app.use(express.json());
app.use(express.static("public"));

const { PORT, DB_HOST, DB_PORT, DB_NAME } = process.env;
mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);

app.use("/users", require("./api/users"));
app.use("/transactions", require("./api/transactions"));

app.listen(PORT, () => console.log("Server is rolling on PORT" + PORT));
mongoose.connection.once("open", () =>
    console.log("You are connected to MongoDB")
);
