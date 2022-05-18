
const { JWT_SECRET }= require('./env');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { find } = require('../models/User');
const {signupValidation, loginValidation } = require('./validation');


class AuthController {


    // Register GET
    register(req, res) {
        res.render('register');
    }

     //Register POST
    async regisTer(req, res, next){ 


         // LETS VALIDATE THE DATA BEFORE WE A USER
         const { error } = signupValidation(req.body);
         if(error) return res.status(400).send(error.details[0].message);
        
           var fullname = req.body.fullname;
           var username = req.body.username;
           var email = req.body.email;
           var password = req.body.password;

        User.findOne({
            email : email
        })
        .then(data=>{
            if(data){
                res.json('Email da ton tai')
            }else{
                return User.create({
                    fullname : fullname,
                    username : username,
                    email : email,
                    password : password
                })
                
            }
        })
        .then(data =>{  res.json('Dang ki thanh cong')})
        .catch(err=>{ return res.status(500).send('Loi server!!!')})


    }

    // LogIn GET
    login(req, res) {
        res.render('login');
    }
    
   // LogIn POST
    async logIn(req, res){


        // CHECKING IF THE EMAIL EXISTS
        const user = await User.findOne({ email: req.body.email });
        if(!user) return res.status(400).send('Email is not found');

        // PASSWORD IS CORRECT
      //  const validPass = await bcrypt.compare(req.body.password, user.password);
      //  if(!validPass) return res.status(400).send('Invalid Password');

        var email = req.body.email
        var  password = req.body.password

     User.findOne({
         email : email,
         password : password
     })
     .then(data=>{
         if(data){
             //res.json('Dang nhap thanh cong');
             res.redirect('home');
         }else{
             res.status(300).send('Sai mat khau !!!');
         }
     })
     .catch(err=>{ res.status(500).send('Co loi ben Server')});



        //CREATE AND ASSIGN A TOKEN
        // const token = jwt.sign({ _id: user._id }, JWT_SECRET);
        // res.header('auth-token', token).json(token);

    }
}

module.exports = new AuthController();