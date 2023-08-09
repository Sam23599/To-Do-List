const express = require('express');
const router = express.Router();
const mainPage = require('../controllers/home');

router.get('/', mainPage.homePage);

module.exports = router;
