const express = require('express');
const router = express.Router();
const controller = require('../controllers/accountController')

router.post('/', controller.createAccount);
router.get('/getMe', controller.getMe);

module.exports = router;