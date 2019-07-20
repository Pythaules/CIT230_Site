var i = 0;
var images = [];
var time = 3000;

images[0] = 'images/DCsmall.jpg';
images[1] = 'images/NCsmall.jpg';
images[2] = 'images/PAsmall.jpg';
images[3] = 'images/SCsmall.jpg';

function changeImg() {
    document.getElementById("slide").src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
    showSummmary(images[i]);
    }

window.onload = changeImg;

var requestURL = 'https://pythaules.github.io/CIT230_Site/Assignments/Final/data/temples.json'
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

function showSummmary() {
    var showTemple = request.response;
    parseTemples(showTemple);
    //console.log(showTemple);
}

function parseTemples(jsonObj) {
    currentTemple = jsonObj['temples'];
    //console.log(currentTemple);
    if (document.getElementById("slide").src.includes("DC")) {
        var templeCode = "DC"
    } else if (document.getElementById("slide").src.includes("NC")) {
        var templeCode = "NC"
    } else if (document.getElementById("slide").src.includes("PA")) {
        var templeCode = "PA"
    } else if (document.getElementById("slide").src.includes("SC")) {
        var templeCode = "SC"
    }

    for (t = 0; t < currentTemple.length; t++) {
        if (currentTemple[t].code == templeCode)
        parseSummary(currentTemple[t].summary);
        //console.log(currentTemple[t].summary);
    }
}

function parseSummary(jsonObj) {
    var currentSummary = jsonObj;
    console.log(currentSummary);
    //var myPara = document.createElement('p');
    document.getElementById('summary').innerText = currentSummary;

    setTimeout("changeImg()", time);
}

