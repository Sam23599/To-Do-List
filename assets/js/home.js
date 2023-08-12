// handling the add and delete actions by routing method

document.getElementById("addTask").addEventListener("click", function () {

    // Update the form's action attribute to route to the "add-task" controller
    document.getElementById("category_Form").action = "/operations/add-task";

    // Submit the form
    document.getElementById("category_Form").submit();

});



document.getElementById("deleteTask").addEventListener("click", function () {
    // Get all the boxes that are checked for deletion 
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    if (checkboxes.length === 0) {
        alert("Please select at least one task to delete.");
        return;
    }

    //  Get all the values of the IDs and store them in array format for convinent server-side handling
    const taskIdsToDelete = Array.from(checkboxes).map(checkbox => checkbox.value);

    // Create a hidden input field to send the selected task IDs
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.name = "taskIds";
    hiddenInput.value = taskIdsToDelete.join(',');

    // Append the hidden input field to the form
    document.getElementById("category_Form").appendChild(hiddenInput);

    // Update the form's action attribute to route to the "delete-task" controller
    document.getElementById("category_Form").action = "/operations/delete-task"; // Replace with your delete controller's route

    // Submit the form
    document.getElementById("category_Form").submit();

});




// Custom css based on different categories

/*

function getCategoryClass(category) {
    switch (category) {
        case 'personal':
            return 'personal-category';
        case 'work':
            return 'work-category';
        case 'school':
            return 'school-category';
        case 'cleaning':
            return 'cleaning-category';
        case 'others':
            return 'others-category';
        default:
            return ''; // Default class if no specific match
    }
}

*/


















// Directly handling the add and delete actions in this file only and not by through the routes and controllers method
// also the below code is maybe incomplete, i need to do some corrections


/* 

const Tasks = require('../../models/toDoList');



document.getElementById('addTask').addEventListener('click', () => {
    const form = document.getElementById('category_Form');
    const formData = new FormData(form);


    fetch('/operations/add-task', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Handle the response data here
            console.log('Task added:', data);
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
        });
});


document.getElementById('deleteTask').addEventListener('click', () => {
    // Add delete task functionality here

    const numbers = document.querySelectorAll('input[type="checkbox"]');

    numbers.forEach(checkbox => {
        checkbox.addEventListener('change', async function (req, res) {
            // get the id from query in url
            let id = req.query.id;

            // find the task in the database using id and delete it

            try {
                // console.log(id);
                await Tasks.findByIdAndDelete(id);
                return res.redirect('back');
            } catch (error) {
                console.log('error in deleting from database');
                return res.redirect('back');
            }

        })
    })

    console.log('Delete button clicked');
    // You can perform the delete operation using a similar fetch request
    // to the appropriate delete route on your backend.
});

*/