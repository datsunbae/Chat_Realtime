const express = require('express');
const dotenv = require('dotenv');

const {chats} = require('./data/data');
const connectDB = require('./config/db');

const app = express();

dotenv.config();

connectDB();

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