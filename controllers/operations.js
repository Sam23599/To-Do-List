const toDoList = require('../models/toDoList');

module.exports.addTask = async function (req, res) {
    console.log('Adding task');

    try {
        const newTask = await toDoList.create({
            description: req.body.description,
            category: req.body.catg,
            date: req.body.due_date,
        });
        console.log('Task added successfully');
        return res.redirect('back');

    } catch (error) {
        console.log('Error in creating a new task: ', error);
        return res.redirect('back');
    }
}

module.exports.deleteTask = async function (req, res) {
    console.log('Deleting tasks');

    const taskIdsToDelete = req.body.taskIds.split(','); // Array of selected task IDs to delete

    try {
        for (let i of taskIdsToDelete) {
            await toDoList.findByIdAndDelete(i);
        }
        console.log('Tasks removed successfully');
        return res.redirect('back');

    } catch (error) {
        console.log('Error in deleting task from database : ', error);
        return res.redirect('back');

    }
}