const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const {chats} = require('./data/data');
const connectDB = require('./config/db');
const routes = require('./routes');

const app = express();

dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

//Body Parser
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
routes(app);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log("Server is running ...");
})