// Import required modules
const express = require('express'); // Import the Express framework
const app = express(); // Create an instance of the Express application
const path = require('path'); // Module for working with file paths
const port = 3000; // Port on which the server will run

// Import database configuration using Mongoose
const { db } = require('./config/mongoose');

// Set view engine and views directory
app.set('view engine', 'ejs'); // Set the template engine to EJS
app.set('views', './views'); // Set the directory for views

// Middleware for parsing URL-encoded data and serving static assets
app.use(express.urlencoded()); // Parse data from forms
app.use(express.static('assets')); // Serve static files from the 'assets' directory

// Middleware for routing
app.use('/', require('./routes/index')); // Use the 'index' route for the root URL

// Start the server and listen on the specified port
app.listen(port, function (err) {
    if (err) {
        console.log('Error in running server', err);
    }
    // Server is running successfully
    return console.log(`Server is running on http://localhost:${port}`);
});
