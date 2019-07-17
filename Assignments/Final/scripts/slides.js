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



