const express = require('express');
const router = express.Router();
const { login } = require('../controllers/auth');

/* GET home page. */
router.post('/', login);

module.exports = router;
