// Import required modules
const express = require('express'); // Import the Express framework
const router = express.Router(); // Create a new router instance
const operate = require('../controllers/operations'); // Import the operations controller

// Define routes to handle add and delete task features
router.post('/add-task', operate.addTask); // When a POST request is made to '/add-task', call the 'addTask' function from the operations controller
router.post('/delete-task', operate.deleteTask); // When a POST request is made to '/delete-task', call the 'deleteTask' function from the operations controller

// Export the router to make it available for use in other files
module.exports = router;
