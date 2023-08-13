// Event listener for the "Add Task" button click
document.getElementById("addTask").addEventListener("click", function () {
    // Update the form's action attribute to route to the "add-task" controller
    document.getElementById("category_Form").action = "/operations/add-task";

    // Submit the form
    document.getElementById("category_Form").submit();
});

// Event listener for the "Delete Task" button click
document.getElementById("deleteTask").addEventListener("click", function () {
    // Get all the checkboxes that are checked for deletion
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    if (checkboxes.length === 0) {
        alert("Please select at least one task to delete.");
        return;
    }

    // Get all the values of the IDs and store them in an array format for convenient server-side handling
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
















// Custom CSS classes based on different categories
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







// Directly handling the add and delete actions in this file only and not through the routes and controllers method
// Note: The below code may require further corrections and adjustments


/*
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

    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const taskIdsToDelete = Array.from(checkboxes).map(checkbox => checkbox.value);

    // Loop through the selected task IDs and delete them using fetch
    taskIdsToDelete.forEach(id => {
        fetch(`/operations/delete-task?id=${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                // Handle successful response
                console.log(`Task with ID ${id} deleted successfully.`);
            } else {
                // Handle unsuccessful response
                console.error(`Error deleting task with ID ${id}.`);
            }
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
        });
    });

    console.log('Delete button clicked');
    // Perform the delete operation using fetch requests to the appropriate delete route on your backend.
});
*/
