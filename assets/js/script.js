var locRoot = 'https://www.loc.gov/';
var locSearch = 'https://www.loc.gov/search/';
var format = 'fo=json';

var search = function(searchTerm) {
    fetch(locSearch + searchTerm + format)
        .then()
};

button.addEventListener('click', search());
