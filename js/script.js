function handleSearch() {
    var searchQuery = document.getElementById('searchInput').value.trim();

    if (searchQuery === '')
    {
        alert('please enter something to search.');

    }
    else{
        alert('searching for ' + searchQuery);
    }
}

function enlargeImage(img) {
    var enlargedImageContainer = document.getElementById('enlargedImageContainer');
    var enlargedImage = document.getElementById('enlargedImage');
    enlargedImage.src = img.src;
    enlargedImageContainer.style.display = 'flex';
}

function closeEnlargedImage() {
    var enlargedImageContainer = document.getElementById('enlargedImageContainer');
    enlargedImageContainer.style.display = 'none';
}

// Function to load the header content
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data; // Replace the header content
        })
        .catch(error => console.log('Error loading header:', error));
}

// Function to load the footer content
function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data; // Replace the footer content
        })
        .catch(error => console.log('Error loading footer:', error));
}

//This function will be called each time a window is loaded. 
// it calls the above functions to load the header and footer when the page is loaded
window.onload = function() {
    loadHeader();
    loadFooter();
};




function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if (name === '') {
        alert('Name is required');
        return false;
    }

    if (email === '') {
        alert('Email is required');
        return false;
    }

    if (message === '') {
        alert('Message is required');
        return false;
    }

    alert('Thank you for contacting us. We will reply as soon as possible.');
    return true;
}

// Function to validate the contact form
function validateContactForm() {
    // Get form values and trim any excess whitespace
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    // Validate Name: Check if the name field is empty
    if (name === '') {
        showError('Name is required', 'name');
        return false; // Stops form submission if the name is empty
    }

    // Validate Email: Check if the email is empty or invalid
    if (!validateEmail(email)) {
        showError('Please enter a valid email address', 'email');
        return false; // Stops form submission if the email is empty or invalid
    }

    // Validate Message: Ensure message has a minimum length of 10 characters
    if (message.length < 10) {
        showError('Message must be at least 10 characters long', 'message');
        return false; // Stops form submission if the message is too short
    }

    // If all validations pass, show a success alert
    alert('Thank you for contacting us. We will reply as soon as possible.');
    return true; // Allows form submission
}

// Function to validate email using a regular expression (regex)
function validateEmail(email) {
    // Regex pattern to check for a valid email format
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email); // Returns true if the email matches the regex
}

// Function to show an error message under the form field
function showError(message, fieldId) {
    var field = document.getElementById(fieldId); // Get the input field by its ID
    var errorElement = document.createElement('span'); // Create a span element to show the error message
    
    // Style the error message
    errorElement.className = 'error-message'; // Add a class for styling
    errorElement.style.color = 'red'; // Set the error message color to red
    errorElement.textContent = message; // Set the error message text
    
    // Remove any previous error messages
    var existingError = field.nextElementSibling;
    if (existingError && existingError.className === 'error-message') {
        existingError.remove(); // Remove the old error message if it exists
    }

    // Insert the new error message after the field
    field.parentNode.insertBefore(errorElement, field.nextSibling);

    // Highlight the field with a red border to show an error
    field.style.borderColor = 'red';

    // Scroll the page to bring the error into view (optional, but helpful)
    field.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Function to load the header content
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data; // Replace the header content
        })
        .catch(error => console.log('Error loading header:', error));
}

// Function to load the footer content
function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data; // Replace the footer content
        })
        .catch(error => console.log('Error loading footer:', error));
}

//This function will be called each time a window is loaded. 
// it calls the above functions to load the header and footer when the page is loaded
window.onload = function() {
    loadHeader();
    loadFooter();
};


