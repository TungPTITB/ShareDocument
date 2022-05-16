const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);

router.post('/123', siteController.add);
router.get('/:courseId', siteController.searchId);
router.delete('/:courseId', siteController.dlt);
router.patch('/:courseId', siteController.up);
router.get('/', siteController.home);



module.exports = router;