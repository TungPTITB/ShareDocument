const express = require('express');
const router = express.Router();

const documentController = require('../app/controllers/DocumentController');

router.get('/:slug', documentController.show);

router.get('/cntt/nam1', documentController.showcntt1);
router.get('/cntt/nam2', documentController.showcntt2);
router.get('/cntt/nam3', documentController.showcntt3);
router.get('/cntt/nam4', documentController.showcntt4);

router.get('/dtvt/nam1', documentController.showdtvt1);
router.get('/dtvt/nam2', documentController.showdtvt2);
router.get('/dtvt/nam3', documentController.showdtvt3);
router.get('/dtvt/nam4', documentController.showdtvt4);

router.get('/ddt/nam1', documentController.showddt1);
router.get('/ddt/nam1', documentController.showddt1);
router.get('/ddt/nam1', documentController.showddt1);
router.get('/ddt/nam1', documentController.showddt1);

router.get('/attt/nam1', documentController.showattt1);
router.get('/attt/nam2', documentController.showattt2);
router.get('/attt/nam3', documentController.showattt3);
router.get('/attt/nam4', documentController.showattt4);

router.get('/cntt', documentController.showcntt);
router.get('/dtvt', documentController.showdtvt);
router.get('/ddt', documentController.showddt);
router.get('/attt', documentController.showattt);


module.exports = router;