const express = require('express');
const router = express.Router();
const authController = require('../app/controllers/AuthController');

const { verifyToken } = require("../app/controllers/verifyToken");

//REGISTER
router.get("/register", authController.getRegister);
router.post("/register", authController.registerUser);
//LOG OUT
router.post("/logout", verifyToken, authController.logOut);
//LOG IN
router.get("/", authController.getLogin);
router.post("/", authController.loginUser);


module.exports = router;