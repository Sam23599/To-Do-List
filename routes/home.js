// to load initial page for the app

const express = require('express');
const router = express.Router();
const mainPage = require('../controllers/home_controller');

router.get('/', mainPage.homePage);

module.exports = router;

