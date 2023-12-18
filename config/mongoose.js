// Import the Mongoose library for MongoDB
const mongoose = require('mongoose');

// Define the MongoDB connection URI
// const mongoURI = 'mongodb://127.0.0.1:27017/my_todo_db'; // Connection URL for the MongoDB database

const mongoURI = "mongodb+srv://satyamvirat:9dyxTtIpy4WEyPyF@cluster0.ejooqmr.mongodb.net/?retryWrites=true&w=majority"

// Get the default connection
const db = mongoose.connection;

// Connect to the MongoDB database using the defined URI
mongoose.connect(mongoURI);

// Event listener for connection error
db.on('error', (err) => {
    console.log('MongoDB connection error:', err); // Log the error if there's a connection issue
});

// Event listener for successful connection
db.once('open', () => {
    console.log('Connected to MongoDB!'); // Log a success message when connected to the database
});

// Export the database connection to make it available for use in other files
module.exports = db;
