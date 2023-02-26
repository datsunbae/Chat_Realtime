const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const AuthenController = {
  loginUser: async (req, res) => {
    try {
    } catch (err) {
      res.status(500).json(err);
    }
  },
  registerUser: async (req, res) => {
    try {
      const { name, email, password, avatar } = req.body;

      if (!name || !email || !password) {
        res.status(400).json("Please enter all the required fields");
        return;
      }

      const checkExists = await User.findOne({ email });

      if (checkExists) {
        res.status(400).json("User already exists");
        return;
      }

      //Hash password
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hash = await bcrypt.hash(password, salt);

      const newUser = await new User({
        name,
        email,
        avatar,
        password: hash,
      });

      const user = await newUser.save();

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = AuthenController;
