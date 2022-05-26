const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Document = new Schema(
    {
      name: { type: String, maxLength:  255 },
      description: { type: String, maxLength: 600 },
      slug: { type: String, maxLength:3010},
      image: { type: String, maxLength:1000 },
      lynk: { type: String, maxLength:2515 },
      document_id: { type: String, maxLength:2515 },
      major: { type: String, maxLength : 255},
      year : { type: Number}
       
    },{
      timestamps: true,
  },
);
Document.index({name: 'text'});
Document.createIndexes({name: 'text'});


module.exports = mongoose.model('Document', Document);