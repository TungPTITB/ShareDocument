const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Document = new Schema(
    {
      name: { type: String, maxLength:  255 },
      description: { type: String, maxLength: 600 },
      slug: { type: String, slug: 'name', unique : true},
      image: { type: String, maxLength:1000 },
      document_id: { type: String, maxLength:2515 },
      major: { type: String, maxLength : 255},
      year : { type: Number}
       
    },{
      timestamps: true,
  },
);


module.exports = mongoose.model('Document', Document);