const express = require('express');
const router = express.Router();

const acountController = require('../app/controllers/AcountController');

router.get('/register', acountController.register);
router.post('/addUser', acountController.addUser);
router.get('/login', acountController.login);
router.post('/checkLogin',acountController.checkLogin);


module.exports = router;

