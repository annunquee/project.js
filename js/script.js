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

// class person {
//     constructor(name, address, email, contact) {
//         this.name = name;
//         this.address = address;
//         this.email = email;
//         this.contact = contact;
//              console.log('Hello $(this.name)');
//     }
// }

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
    return true;
}

// signup button event listener
document.addEventListener('DOMContentLoaded', (event) => {
    const signupButton = document.getElementById('signupButton');
    signupButton.addEventListener('click', () => {
        window.location.href = 'signup.html';
    });
});

function signupForm() {
    var  name = document.getElementById('name').value.trim();
    var address = document.getElementById('address').value.trim();
    var email = document.getElementById('email').value.trim();
    var contact = document.getElementById('contact').value.trim();
    var password = document.getElementById('password').value.trim();

    if (name === '') {
        alert('Name is required');
        return false;
    }

    if (address === '') {
        alert('Address is required');
        return false;
    }

    if (email === '') {
        alert('Email is required');
        return false;
    }

    if (contact === '') {
        alert('Contact is required');
        return false;
    }

    if (password === '') {
        alert('Password is required');
        return false;
    }

    alert('Order completed.');
    return true;
}