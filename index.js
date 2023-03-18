const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to server-2")
})

app.listen(8080, () => {
    console.log("Connected to server");
})