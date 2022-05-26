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
    };

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
    };

    showcntt(req, res,next ) {
        Document.find({major : "cntt"})
                .then(documents => {
                        res.render('documents/showmen', {
                            documents:mutipleMongooseToObject(documents)
                        });
                    })
                .catch(next); 
    };

    showddt(req, res,next ) {
        Document.find({major : "ddt"})
                .then(documents => {
                        res.render('documents/showmenu', {
                            documents:mutipleMongooseToObject(documents)
                        });
                    })
                .catch(next); 
    };
    showddt1(req, res,next ) {
        Document.find({major : "ddt", year : "1"})
                .then(documents => {
                        res.render('documents/showmenu', {
                            documents:mutipleMongooseToObject(documents)
                        });
                    })
                .catch(next); 
    };
    showddt1(req, res,next ) {
        Document.find({major : "ddt", year : "1"})
                .then(documents => {
                        res.render('documents/showmenu', {
                            documents:mutipleMongooseToObject(documents)
                        });
                    })
                .catch(next); 
    };
    showddt3(req, res,next ) {
        Document.find({major : "ddt", year : "3"})
                .then(documents => {
                        res.render('documents/showmenu', {
                            documents:mutipleMongooseToObject(documents)
                        });
                    })
                .catch(next); 
    };
    showddt4(req, res,next ) {
        Document.find({major : "ddt", year : "4"})
                .then(documents => {
                        res.render('documents/showmenu', {
                            documents:mutipleMongooseToObject(documents)
                        });
                    })
                .catch(next); 
    };

    showattt(req, res,next ) {
        Document.find({major : "attt"})
                .then(documents => {
                        res.render('documents/showmenu', {
                            documents:mutipleMongooseToObject(documents)
                        });
                    })
                .catch(next); 
    };

    showattt1(req, res,next ) {
        Document.find({major : "attt", year : "1"})
                .then(documents => {
           
                    res.render('documents/showmenu', {
                            documents:mutipleMongooseToObject(documents)
                        });
                    })
                .catch(next); 
    };
    showattt2(req, res,next ) {
        Document.find({major : "attt", year : "2"})
                .then(documents => {
                        res.render('documents/showmenu', {
                            documents:mutipleMongooseToObject(documents)
                        });
                    })
                .catch(next); 
    };
    showattt3(req, res,next ) {
        Document.find({major : "attt", year : "3"})
                .then(documents => {
                        res.render('documents/showmenu', {
                            documents:mutipleMongooseToObject(documents)
                        });
                    })
                .catch(next); 
    };
    showattt4(req, res,next ) {
        Document.find({major : "attt", year : "4"})
                .then(documents => {
                        res.render('documents/showmenu', {
                            documents:mutipleMongooseToObject(documents)
                        });
                    })
                .catch(next); 
    };

    showcntt1(req, res,next ) {
        Document.find({major : "cntt", year : "1"})
                .then(documents => {
                        res.render('documents/showmenu', {
                            documents:mutipleMongooseToObject(documents)
                        });
                    })
                .catch(next); 
    };
    showcntt2(req, res,next ) {
        Document.find({major : "cntt", year : "2"})
                .then(documents => {
                        res.render('documents/showmenu', {
                            documents:mutipleMongooseToObject(documents)
                        });
                    })
                .catch(next); 
    };
    showcntt3(req, res,next ) {
        Document.find({major : "cntt", year : "3"})
                .then(documents => {
                        res.render('documents/showmenu', {
                            documents:mutipleMongooseToObject(documents)
                        });
                    })
                .catch(next); 
    };
    showcntt4(req, res,next ) {
        Document.find({major : "cntt", year : "4"})
                .then(documents => {
                        res.render('documents/showmenu', {
                            documents:mutipleMongooseToObject(documents)
                        });
                    })
                .catch(next); 
    };

    showdtvt1(req, res,next ) {
        Document.find({major : "dtvt", year : "1"})
                .then(documents => {
                        res.render('documents/showmenu', {
                            documents:mutipleMongooseToObject(documents)
                        });
                    })
                .catch(next); 
    };
    showdtvt2(req, res,next ) {
        Document.find({major : "dtvt", year : "2"})
                .then(documents => {
                        res.render('documents/showmenu', {
                            documents:mutipleMongooseToObject(documents)
                        });
                    })
                .catch(next); 
    };
    showdtvt3(req, res,next ) {
        Document.find({major : "dtvt", year : "3"})
                .then(documents => {
                        res.render('documents/showmenu', {
                            documents:mutipleMongooseToObject(documents)
                        });
                    })
                .catch(next); 
    };
    showdtvt4(req, res,next ) {
        Document.find({major : "dtvt", year : "4"})
                .then(documents => {
                        res.render('documents/showmenu', {
                            documents:mutipleMongooseToObject(documents)
                        });
                    })
                .catch(next); 
    };

}



module.exports = new DocumentController();