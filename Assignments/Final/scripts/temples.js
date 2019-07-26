var requestURL = 'https://pythaules.github.io/CIT230_Site/Assignments/Final/data/temples.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var showTemples = request.response;
    parseTemples(showTemples);
}

function parseTemples(jsonObj) {
    currentTemple = jsonObj['temples'];
    for (t = 0; t < currentTemple.length; t++) {
        if (currentTemple[t].code == 'DC')
        populateTempleData(currentTemple[t]);
    }
    for (t = 0; t < currentTemple.length; t++) {
        if (currentTemple[t].code == 'PA')
        populateTempleData(currentTemple[t]);
    }    
    for (t = 0; t < currentTemple.length; t++) {
        if (currentTemple[t].code == 'NC')
        populateTempleData(currentTemple[t]);
    }
    for (t = 0; t < currentTemple.length; t++) {
        if (currentTemple[t].code == 'SC')
        populateTempleData(currentTemple[t]);
    }
}

function populateTempleData(jsonObj) {
    var closures = jsonObj['closureSchedule'];
    for (c = 0; c < closures.length; c++) {
        populateClosures(closures[c]);
        console.log(closures);
    }
}