const express = require('express');
const router = express.Router();
const {loginUser, registerUser} = require('../controllers/authenController');

router.post("/login", () => {});
router.post("/register", registerUser);
router.post("/logout", () => {});
router.post("/refreshtoken", () => {});

module.exports = router;