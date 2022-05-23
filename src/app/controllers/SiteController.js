const Course = require('../models/Course');
const Document = require('../models/Document');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] 
    

    showUser(req, res,next ) {
        res.render('user');
      }

      showAdmin(req, res, next ) {
        res.render('admin');
      }

      showIntro(req, res,next ) {
        res.render('intro');
      }

      showSlug(req, res,next ) {
        res.render('document');
      }

    showHome(req,res,next){
        Document.find({})
        .then(documents =>{
            
            res.render('home',{ 
                documents: mutipleMongooseToObject(documents)});
        })
        .catch(next);
     }   
    // [GET] /search
    search(req, res) {
        res.render('search');
    }
    //POST
    async add(req, res, next){
        const course = new Course({
            name: req.body.name,
            description: req.body.description
        });
        try{
            const savedCourse = await course.save();
            res.json(savedCourse);
        }catch(err){
            res.json({massage : err});
        }
       }
       //specific post
    async searchId (req, res){
        try {
            const course = await Course.findById(req.params.courseId);
            res.json(course);
        } catch (err) {
            res.json({massage : err});
        }
    }

    //DELETE
    async dlt(req, res){
        try {
            const removeCourse = await Course.remove({ _id: req.params.courseId});
            res.json(removeCourse);
        } catch (err) {
            res.json({massage : err});
        }
    }

    //UPDATE
    async up(req, res){
        try {
            const updateCourse = await Course.updateOne(
                { _id : req.params.courseId },
                { $set: { name: req.body.name, description: req.body.description}}
            );
            res.json(updateCourse);
        } catch (err) {
            res.json({massage : err});
        }
    }

}

module.exports = new SiteController();