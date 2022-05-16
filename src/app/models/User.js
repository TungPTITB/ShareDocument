const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    fullname: {
        type: String,
        max:255,
        min:5
    },
    username: {
        type: String,
        max:255,
        min:5
    },
    email: {
        type: String,
        max:255,
        min:15,
        required: true,
        unique: true,
        lowercase: true 
    },
    password: {
        type: String, 
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('User', User);