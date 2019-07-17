var i = 0;
var images = [];
var time = 3000;

images[0] = 'images/DCfull.jpg';
images[1] = 'images/NCfull.jpg';
images[2] = 'images/PAfull.jpg';
images[3] = 'images/SCfull.jpg';

function changeImg() {
    document.getElementById("slide").src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
    }

window.onload = changeImg;

var requestURL = 'https://pythaules.github.io/CIT230_Site/Assignments/Final/data/temples.json'
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var showTemple = request.response;
    parseTemples(showTemple);
    console.log(showTemple);
}

function parseTemples(jsonObj) {
    currentTemple = jsonObj['temples'];
    console.log(currentTemple);
    if (document.getElementById("slide").src.includes("DC")) {
        var templeCode = "DC"
    }
    for (t = 0; t < currentTemple.length; t++) {
        if (currentTemple[t].code == templeCode)
        parseSummary(currentTemple[t]);
        console.log(currentTemple[t]);
    }
}

