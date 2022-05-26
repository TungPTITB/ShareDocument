const Course = require('../models/Course');
const Document = require('../models/Document');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] 
    

    showUser(req, res,next ) {
        res.render('user');
      }

      showMenu(req, res, next ) {
        res.render('menu');
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
    async search(req, res) {
        try {
            const features = new APIfeatures(Document.find(), req.query)
            .paginating().sorting().searching().filtering()
      
            const result = await Promise.allSettled([
              features.query,
              Products.countDocuments() //count number of products.
            ])
            
            const products = result[0].status === 'fulfilled' ? result[0].value : [];
            const count = result[1].status === 'fulfilled' ? result[1].value : 0;
      
            return res.status(200).json({products, count})
          } catch (err) {
            return res.status(500).json({msg: err.message})
          }
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