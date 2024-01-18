const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/', siteController.home);
router.get('/api', siteController.api);

router.get('/api/:slug/detail', siteController.detail);
router.get('/api/:type/detailTypeAPI', siteController.detailTypeAPI);


module.exports = router;
