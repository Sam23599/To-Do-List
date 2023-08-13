// Import the required module
const toDoList = require('../models/toDoList'); // Import the 'toDoList' model

// Define a function to handle adding a new task
module.exports.addTask = async function (req, res) {
    console.log('Adding task');

    try {
        // Create a new task using data from the request body
        const newTask = await toDoList.create({
            description: req.body.description, // Task description
            category: req.body.catg, // Task category
            date: req.body.due_date, // Task due date
        });
        console.log('Task added successfully');
        return res.redirect('back'); // Redirect back to the previous page

    } catch (error) {
        console.log('Error in creating a new task: ', error);
        return res.redirect('back'); // Redirect back with an error
    }
}

// Define a function to handle deleting tasks
module.exports.deleteTask = async function (req, res) {
    console.log('Deleting tasks');

    const taskIdsToDelete = req.body.taskIds.split(','); // Array of selected task IDs to delete

    try {
        // Loop through selected task IDs and delete each task
        for (let i of taskIdsToDelete) {
            await toDoList.findByIdAndDelete(i); // Delete task by ID
        }
        console.log('Tasks removed successfully');
        return res.redirect('back'); // Redirect back to the previous page

    } catch (error) {
        console.log('Error in deleting task from database : ', error);
        return res.redirect('back'); // Redirect back with an error
    }
}
