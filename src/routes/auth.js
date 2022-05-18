const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({extended: false})

const authController = require('../app/controllers/AuthController');


router.post('/register',urlencodedParser, authController.regisTer);
router.get('/register',authController.register);
router.post('/',urlencodedParser ,authController.logIn);
router.get('/',authController.login);




module.exports = router;