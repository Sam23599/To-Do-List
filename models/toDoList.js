const mongoose = require('mongoose');

// Define the schema for the 'List' collection
const ListSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {
    timestamps: true // Automatically add 'createdAt' and 'updatedAt' fields
});

// Create the 'List' model based on the schema
const List = mongoose.model('List', ListSchema);

// Export the 'List' model to make it available for use in other files
module.exports = List;
