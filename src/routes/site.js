const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');



router.get('/search', siteController.search);
router.get('/myprofile', siteController.showUser);
router.patch('/myprofile', siteController.updateUser);

router.get('/', siteController.showHome);



module.exports = router;