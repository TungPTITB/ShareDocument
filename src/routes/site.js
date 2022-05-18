const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');


router.post('/123', siteController.add);
router.get('/:courseId', siteController.searchId);
router.delete('/:courseId', siteController.dlt);
router.patch('/:courseId', siteController.up);


router.get('/menu/:slug', siteController.showSlug);
router.get('/search', siteController.search);
router.get('/intro', siteController.showIntro);
router.get('/admin', siteController.showAdmin);
router.get('/:userId', siteController.showUser);
router.get('/', siteController.showHome);



module.exports = router;