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
    if (window.location.pathname.includes("preston")) {
        var townName = "Preston"
    } else if (window.location.pathname.includes("fishhaven")) {
        var townName = "Fish Haven"
    } else if (window.location.pathname.includes("sodasprings")) {
        var townName = "Soda Springs"
    }
    for (t = 0; t < currentTowns.length; t++) {
        if (currentTowns[t].name == townName)
        populateTownData(currentTowns[t]);
    }
}

function populateTownData(jsonObj) {
    var town = jsonObj;

    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
        myPara1.setAttribute("class", "motto")
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');
    var myImg = document.createElement('img')
        myImg.setAttribute("src", "images/" + town.name + ".jpg");
        myImg.setAttribute("alt", town.name + " Image");
    
    myH2.textContent = town.name;
    myPara1.textContent = 'Motto: ' + town.motto;
    myPara2.textContent = 'Year Founded: ' + town.yearFounded;
    myPara3.textContent = 'Current Population:' + town.currentPopulation;
    myPara4.textContent = 'Annual Rainfall:' + town.averageRainfall;
    myImg.innerHTML;

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myImg);

    document.getElementById("index").appendChild(myArticle);
}