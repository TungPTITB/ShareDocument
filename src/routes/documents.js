const express = require('express');
const router = express.Router();

const documentController = require('../app/controllers/DocumentController');


router.get('/:slug', documentController.show);


module.exports = router;