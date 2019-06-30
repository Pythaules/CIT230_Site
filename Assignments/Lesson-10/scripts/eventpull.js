var section = document.querySelector('section');

var requestURL = 'https://pythaules.github.io/CIT230_Site/Assignments/Lesson-9/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var showTowns = request.response;
    parseTowns(showTowns);
}

function parseTowns(jsonObj) {
    currentTowns = jsonObj['towns'];
    for (t = 0; t < currentTowns.length; t++) {
        if (currentTowns[t].name == 'Preston')
        populateTownData(currentTowns[t]);
        console.log(currentTowns[t]);
    }
}

