// Import required modules
const express = require('express'); // Import the Express framework
const router = express.Router(); // Create a new router instance
const mainPage = require('../controllers/home_controller'); // Import the home controller

// Define a route to load the initial page for the app
router.get('/', mainPage.homePage); // When the root URL ('/') is accessed using a GET request, call the 'homePage' function from the home controller

// Export the router to make it available for use in other files
module.exports = router;
