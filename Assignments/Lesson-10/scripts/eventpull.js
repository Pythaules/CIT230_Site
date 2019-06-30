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
        parseEvent(currentTowns[t]);
        //console.log(currentTowns[t]);
    }
}

function parseEvent(jsonObj) {
    currentEvent = jsonObj['events'];
    //console.log(currentEvent);
    for (e = 0; e < currentEvent.length; e++) {
        populateEvents(currentEvent[e]);
        //console.log(currentEvent);
    }
}

function populateEvents(jsonObj) {
    var event = jsonObj;
    console.log(event);

    var myPara = document.createElement('p');

    myPara.textContent = event;

    document.getElementById("events").appendChild(myPara);
}

