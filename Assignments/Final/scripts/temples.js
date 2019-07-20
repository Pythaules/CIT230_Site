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
        if (currentTemple[t].code == 'NC')
        populateTempleData(currentTemple[t]);
    }    
    for (t = 0; t < currentTemple.length; t++) {
        if (currentTemple[t].code == 'PA')
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
    var myH3 = document.createElement('h3');
    var myPara1 = document.createElement('p');
        myPara1.setAttribute("class", "motto")
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');
    var myImg = document.createElement('img')
        myImg.setAttribute("src", "images/" + temple.code + "full.jpg");
        myImg.setAttribute("alt", temple.name + " Image");
    
    myH3.textContent = temple.name;
    myPara1.textContent = 'Address: ' + temple.address;
    myPara2.textContent = 'Phone: ' + temple.phone;
    myPara3.textContent = 'Email:' + temple.email;
    myPara4.textContent = 'Services:' + temple.services;
    myImg.innerHTML;

    myArticle.appendChild(myH3);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myImg);

    document.getElementById("index").appendChild(myArticle);
}