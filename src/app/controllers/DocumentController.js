const Document = require('../models/Document');

class DocumentController {
    // [GET] /
    show(req, res,next ) {
        Document.findOne({ slug: req.params.slug})
                .then(document => {
                        res.render('documents/show');
                })
                .catch(next); 
    }
}

module.exports = new DocumentController();