
const { JWT_KEY }= require('./env');
const jwt = require("jsonwebtoken");
const { options } = require('../../routes/site');

const verifyToken = (req, res, next) => {
  
  const Token = req.cookies.Token;
  if (Token) {
    jwt.verify(Token, JWT_KEY, (err, user) => {
      if (err) {
        return res.redirect('/');
      }
      req.user = user;
      next();
    });
  } else {
    res.redirect('/');
  }
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).send("You're not allowed to do that!");
    }
  });
};


module.exports = {
  verifyToken,
  verifyTokenAndAdmin
};
