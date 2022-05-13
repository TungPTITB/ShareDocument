const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Document = new Schema(
    {
        name: { type: String, maxLength:  255 },
        description: { type: String, maxLength: 600 },
        slug: { type: String, maxLength:300}
  //      image: { type: String, maxLength:255 },
    }
);



module.exports = mongoose.model('Document', Document);