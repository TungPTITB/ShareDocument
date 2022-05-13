
const { JWT_SECRET }= require('./index');
const User = require('../models/User');
const {signupValidation, loginValidation } = require('./validation');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


class AuthController {
     //SIGN_UP
    async signUp(req, res){

        // LETS VALIDATE THE DATA BEFORE WE A USER
        const { error } = signupValidation(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        // CHECKING IF THE USER ALREADY IN THE DB
        const emailExist = await User.findOne({ email: req.body.email });
        if(emailExist) return res.status(400).send('Email already exist');

        //HASH PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        // CREATE A NEW USER
        const user = User({
            name : req.body.name,
            email: req.body.email,
            password: hashPassword 
        });
        try {
            const savedUser = await user.save();
            res.send({user : user._id});
        } catch (error) {
            res.status(400).send(error);
        }

    }
    

   // LOG_IN
    async logIn(req, res){

        // LETS VALIDATE THE DATA BEFORE WE A USER
        const { error } = loginValidation(req.body);
        if(error) return res.status(400).send(error.details[0].message);

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