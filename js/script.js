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

class person {
    constructor(name, address, email, contact) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.contact = contact;
             console.log('Hello $(this.name)');
    }
}

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

let person = {
    name: 'Queen',
    address: '70 castlegateway adams town',
    email: 'kafikoa77@gmail.com',
    contact: '+35316109403',
    greeting: function() {
        return 'Hello Queen welcome to kids store';
    }
     
}

let school = {
    name: 'Lucan cns',
    address: 'balgady road lucan',
    email: 'info@lucancns.ie',
    contact: '+35314570432',
    info: function() {
        return 'We have school supplies';
    }
}

function printobj(obj) {
    for (let key in obj) {
        console.log(key + " : " +obj[key]);
    }
}

printobj(person);
printobj(school);

let product = ['baby monitor', 'organizer', 'hoodie', 'vtech'];
console.log(product[0]);
console.log(product.join(' and '));

product = ['baby monitor', 'organizer', 'hoodie', 'vtech'];
product.push('babysense');

product = ['baby monitor', 'organizer', 'hoodie', 'vtech'];
product.splice();
product.splice(2, 1, 'vtech');
product.splice(0, 3);

var button = document.querySelector(button);
var box = document.getElementById(changePage);

function changePage(){
    box.nextPage = newPage;
}

function changePage(){
    if(box.nextPage == 'newPage'){
        box.newPage == 'nextpage';
    }else{
        box.nextPage = 'firstPage'
    }
}