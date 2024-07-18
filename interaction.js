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

class person {
    constructor(name, address, email, contact) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.contact = contact;
             console.log('Hello $(this.name)');
    }
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