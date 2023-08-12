const mongoose = require('mongoose');
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
    timestamps: true
});

const List = mongoose.model('List', ListSchema);
module.exports = List;