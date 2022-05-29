const User = require('../models/User');
const Document = require('../models/Document');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { JWT_KEY }= require('./env');
const jwt = require("jsonwebtoken");
const {updateValidation} = require('./validation');
const PAGE_SIZE = 5;

class SiteController {
    // [GET] 
    

    async updateUser(req, res, next){

            // LETS VALIDATE THE DATA BEFORE WE A USER
        const { error } = updateValidation(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        const emailExist = await User.findOne({ email: req.body.email });
        if(emailExist) return res.status(400).send('Email already exist');
        
        const Token = req.cookies.Token;
        if (Token) {
          jwt.verify(Token, JWT_KEY, (err, user) => {
            if (err) {
              return res.redirect('/');
            }
            req.user = user;
            const user_id = user.id ;
            User.updateOne(
                { _id : user_id },
                { $set: {  fullname: req.body.fullname, username: req.body.username,email: req.body.email, password: req.body.password}}
            )
            .then(res.redirect('/home/myprofile'))
            .catch(next);
            
          });
        } else {
          res.redirect('/');
        }
    }
    showUser(req, res,next ) {
        const Token = req.cookies.Token;
        if (Token) {
          jwt.verify(Token, JWT_KEY, (err, user) => {
            if (err) {
              return res.redirect('/');
            }
            req.user = user;
            const user_id = user.id ;
            User.find({ _id: user_id })
            .then(users =>{
                
                res.render('user',{ 
                    users: mutipleMongooseToObject(users)});
            })
            .catch(next);
            
          });
        } else {
          res.redirect('/');
        }
        }
     
    // showHome(req,res,next){
    //     Document.find({})
    //     .then(documents =>{
            
    //         res.render('home',{ 
    //             documents: mutipleMongooseToObject(documents)});
    //     })
    //     .catch(next);
        
    //  }   
    
    // [GET] /search
    search(req, res, next) {
         //let Document = [];
        var keyword = req.query.key; 
        Document.find({"$or":[
                  { "slug": {$regex : keyword}},
                  { "name": {$regex : new RegExp(keyword, 'i')}},
                  { "major": {$regex : keyword}}
               ]})
        .then(documents => {
                res.render('documents/showmenu', {
                    documents:mutipleMongooseToObject(documents)
                });
            })
        .catch(next);  
        
    }
    showHome(req,res,next){
      var page = req.query.page;
      if(page){
          //get page
          page = parseInt(page)
          if(page < 0){ 
              page = 1
          }
          var soluongboqua = (page - 1) * PAGE_SIZE
          Document.find({})
          .skip(soluongboqua)
          .limit(PAGE_SIZE)
          .then(documents => {
            res.render('documents/showmenu', {
                documents:mutipleMongooseToObject(documents)
            });
        })
          .catch(err=>{
              res.status(500).json('loi sever')
          })            
      }else{
          //GET ALL PAGE
          Document.find({})
          .then(documents => {
            res.render('documents/showmenu', {
                documents:mutipleMongooseToObject(documents)
            });
        })
          .catch(err=>{
              res.status(500).json('loi sever')
          })
      }
  }


}

module.exports = new SiteController();