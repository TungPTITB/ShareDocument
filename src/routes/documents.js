const express = require('express');
const router = express.Router();

const documentController = require('../app/controllers/DocumentController');

router.get('/:slug', documentController.show);
router.get('/cntt/nam1', documentController.showcntt);
router.get('/dtvt/nam1', documentController.showdtvt);
module.exports = router;