const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    fullname: {
        type: String, 
        max:255,
       // required: true,
        min:2
    },
    username: {
        type: String,
        max:255,
      //  required: true,
        min:2
    },
    email: {
        type: String,
        max:255,
        min:10,
     //   required: true,
        unique: true,
        lowercase: true 
    },
    password: {
        type: String, 
     //   required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('User', User);