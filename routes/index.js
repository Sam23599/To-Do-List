// Import required modules
const express = require('express'); // Import the Express framework
const router = express.Router(); // Create a new router instance

// Define routes using middleware
router.use('/', require('./home')); // Use the 'home' route for the root URL ('/')
router.use('/operations', require('./operations')); // Use the 'operations' route for the '/operations' URL

// Export the router to make it available for use in other files
module.exports = router;
