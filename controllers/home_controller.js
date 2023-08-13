// Import the required module
const toDoList = require('../models/toDoList'); // Import the 'toDoList' model

// Define a function to handle rendering the home page
module.exports.homePage = async function (req, res) {
    try {
        // Fetch all items from the 'toDoList' model asynchronously
        const listItems = await toDoList.find({}); // Query the database to retrieve all items
        
        // Render the 'home' view, passing in the retrieved items and a title
        return res.render('home', {
            title: "To Do List",
            List: listItems
        });
    } catch (err) {
        // Handle errors by logging them and redirecting back
        console.log('Error in fetching data from database', err);
        return res.redirect('back');
    }
};
