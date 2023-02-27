const express = require('express');
const router = express.Router();
const {loginUser, registerUser, logout, refreshToken} = require('../controllers/authenController');

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/logout", logout);
router.post("/refreshtoken", refreshToken);

module.exports = router;