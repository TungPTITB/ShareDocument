const express = require('express');
const router = express.Router();

const authController = require('../app/controllers/AuthController');

// router.get('/secret',authController.secret);
 router.post('/login',authController.logIn);
router.post('/signup',authController.signUp);


module.exports = router;