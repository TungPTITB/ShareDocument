const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
        {
                fullname: { type: String, maxLength:  255, minLength:2, required : true },
                username: { type: String, maxLength:  255, minLength:2, required : true },
                email: { type: String, maxLength:  255, minLength:10, required : true, unique: true },
                password: { type: String, maxLength:  255, minLength:6, required : true },
                isAdmin: { type: Boolean, default: false }
        },{
                timestamps: true,
            },

  
);
module.exports = mongoose.model('User', User);