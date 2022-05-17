
const { JWT_SECRET }= require('./env');
const User = require('../models/User');
//const {signupValidation, loginValidation } = require('./validation');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


class AuthController {


    // Register GET
    register(req, res) {
        res.render('register');
    }

     //SIGN_UP
    async regisTer(req, res){ 
       // try {
      //  LETS VALIDATE THE DATA BEFORE WE A USER
        // const { error } = signupValidation(req.body);
        // if(error) return res.status(400).send(error.details[0].message);

       // CHECKING IF THE USER ALREADY IN THE DB
      //  const emailExist = await User.findOne({ email: req.body.email });
       // if(emailExist) return res.status(400).send('Email already exist');

       // HASH PASSWORD
      //  const salt = await bcrypt.genSalt(10);
       // const hashPassword = await bcrypt.hash(req.body.password, salt);

      //  CREATE A NEW USER
    
        const formData = req.body;
        const user = new User(formData);
        user.save()
            .then(()=> res.redirect('home'))
            .catch (error => {

        });

    }

    // hiển thị giao diện login
    login(req, res) {
        res.render('login');
    }
    
   // LOG_IN
    async logIn(req, res){

        // LETS VALIDATE THE DATA BEFORE WE A USER
        // const { error } = loginValidation(req.body);
        // if(error) return res.status(400).send(error.details[0].message);

        // CHECKING IF THE EMAIL EXISTS
        const user = await User.findOne({ email: req.body.email });
        if(!user) return res.status(400).send('Email is not found');

        // PASSWORD IS CORRECT
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if(!validPass) return res.status(400).send('Invalid Password');

        //CREATE AND ASSIGN A TOKEN
        const token = jwt.sign({ _id: user._id }, JWT_SECRET);
        res.header('auth-token', token).json(token);

    }
}

module.exports = new AuthController();