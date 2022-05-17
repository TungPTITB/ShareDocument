const express = require('express');
const router = express.Router();

const authController = require('../app/controllers/AuthController');


router.post('/register',authController.regisTer);
router.get('/register',authController.register);
router.post('/',authController.logIn);
router.get('/',authController.login);




module.exports = router;