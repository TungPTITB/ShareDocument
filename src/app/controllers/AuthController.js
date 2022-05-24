const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_KEY} = require("./env");
const { verifyTokenAndAdmin } = require("./verifyToken");


let Tokens = [];

const authController = {


  //GET_REGISTER
  getRegister: (req, res, next)=> {
        res.render('register');
  }  ,
  //REGISTER
  registerUser: async (req, res) => {
    try {


      // CHECKING IF THE USER ALREADY IN THE DB
        const emailExist = await User.findOne({ email: req.body.email });
        if(emailExist) return res.status(400).send('Email already exist');

      //HASH_PASSWORD
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);

      //Create new user
      const newUser = await new User({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: hashed,
      });

      //Save user to DB
      const user = await newUser.save();
      res.status(200).send('Dang ki thanh cong');
    } catch (err) {
      res.status(500).json(err);
    }
  },

  generateToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        isAdmin : user.isAdmin
      },
      JWT_KEY,
      { expiresIn: "7d" }
    );
  },


  //GET_LOGIN
  getLogin : (req, res, next)=>{
      res.render('login');
  },

  //LOGIN
  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
       return res.status(404).send("Emial không tồn tại");
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      const x =  req.body.password;
      const y = user.password;

      if (!validPassword && x!=y ) {
       return res.status(404).send("Mật khẩu không hợp lệ");
      }
      if (user && ( validPassword || x==y )  ) {
      
        const Token = authController.generateToken(user);
        Tokens.push(Token);
        //STORE REFRESH TOKEN IN COOKIE
        res.cookie("Token", Token, {
          httpOnly: true,
          secure:false,
          path: "/",
          sameSite: "strict",
        });
        if( user.isAdmin == true){
          return res.redirect('/admin');
        }else{
           return res.redirect('/home');
        }
       
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },


  //LOG OUT
  logOut: async (req, res) => {
    //Clear cookies when user logs out
    Tokens = Tokens.filter((token) => token !== req.body.token);
    res.clearCookie("Token");
    res.status(200).send("Logged out successfully!");
  },
};

module.exports = authController;
