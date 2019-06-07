const express = require('express');
const router = express.Router();
const controller = require('../controllers/authenticateController')

router.post('/', controller.login);

module.exports = router;