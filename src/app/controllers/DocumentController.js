const Document = require('../models/Document');
const { mongooseToObject } = require('../../util/mongoose');
class DocumentController {
    // [GET] /
    show(req, res,next ) {
        Document.findOne({ slug: req.params.slug})
                .then(document => 
                        res.render('documents/show', {document:mongooseToObject(document)})
                )
                .catch(next); 
    }
}

module.exports = new DocumentController();