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
