const express = require('express');
const dotenv = require('dotenv');

const {chats} = require('./data/data');

const app = express();

dotenv.config();

app.get("/api/chat", (req, res) => {
    res.status(200).json(chats);
})

app.get("/", (req, res) => {
    res.send("Hello world");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log("Server is running ...");
})