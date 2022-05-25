const Document = require('../models/Document');
const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class DocumentController {
    // [GET] /
    show(req, res,next ) {
        Document.findOne({ slug: req.params.slug})
                .then(document => 
                        res.render('documents/show', {document:mongooseToObject(document)})
                )
                .catch(next); 
    }

    showdtvt(req, res,next ) {
        // const major = req.body.major;
        // const year = req.body.year;
        Document.find({major : "dtvt"})
                .then(documents => {
                        res.render('documents/showmenu', {
                            documents:mutipleMongooseToObject(documents)
                        });
                    })
                .catch(next); 
    }
    showcntt(req, res,next ) {
        // const major = req.body.major;
        // const year = req.body.year;
        Document.find({major : "cntt"})
                .then(documents => {
                        res.render('documents/showmenu', {
                            documents:mutipleMongooseToObject(documents)
                        });
                    })
                .catch(next); 
    }


//get 
    create(req, res,next ) {
      res.render('documents/create');
    }
//post
    store(req, res,next ) {
        const formData = req.body;
        const document =new Document(formData);
        document.save();
         
        res.send('save');
      }
}



module.exports = new DocumentController();