const express = require('express');
const router = express.Router();

const ShopController = require('../app/controllers/ShopController');
const upload = require('../middleware/uploadImg');
router.get('/create', ShopController.create);
router.get('/createType', ShopController.createType);
router.get('/stored-shop', ShopController.storedShop);
router.get('/:id/edit', ShopController.edit);
router.put('/:id', ShopController.update);
router.delete('/:id', ShopController.delete);
router.get('/:slug/detail', ShopController.detail);
router.get('/:type/detailType', ShopController.detailType);
router.post('/store', upload.single('image') ,ShopController.store);
router.post('/storeType', upload.single('image') ,ShopController.storeType);



module.exports = router;