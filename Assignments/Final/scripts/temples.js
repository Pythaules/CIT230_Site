var section = document.querySelector('section');

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
    var temple = jsonObj;

    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myImg = document.createElement('img')
    myImg.setAttribute("src", "images/" + temple.code + "full.jpg");
    myImg.setAttribute("alt", temple.name + " Image");
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');
    var myPara5 = document.createElement('p');
    var myPara6 = document.createElement('p');
    var myPara7 = document.createElement('p');
    var myPara8 = document.createElement('p');
    
    myH2.textContent = temple.name;
    myImg.innerHTML;
    myPara1.textContent = 'Address: ' + temple.address;
    myPara2.textContent = 'Phone: ' + temple.phone;
    myPara3.textContent = 'Email: ' + temple.email;
    myPara4.textContent = 'Services: ' + temple.services;
    myPara5.textContent = 'History: ' + temple.history;
    myPara6.textContent = 'Session Schedule: ' + temple.sessionSchedule;
    myPara7.textContent = 'Closure Schedule: ' + temple.closureSchedule;
    myPara8.textContent = 'Summary: ' + temple.summary;

    myArticle.appendChild(myH2);
    myArticle.appendChild(myImg);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);
    myArticle.appendChild(myPara6);
    myArticle.appendChild(myPara7);
    myArticle.appendChild(myPara8);

    document.getElementById("index").appendChild(myArticle);
}