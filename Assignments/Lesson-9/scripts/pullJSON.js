var section = document.querySelector('section');

var requestURL = 'https://pythaules.github.io/CIT230_Site/Assignments/Lesson-9/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var showTowns = request.response;
    populateTowns(showTowns);
}

function populateTowns(jsonObj) {
    var towns = jsonObj['towns'];

    for(var i = 0; i < towns.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
            myPara1.setAttribute("class", "motto")
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myImg = document.createElement('img')
            myImg.setAttribute("src", "images/" + towns[i].name + ".jpg");
            myImg.setAttribute("alt", towns[i].name + " Image");
        
        myH2.textContent = towns[i].name;
        myPara1.textContent = 'Motto: ' + towns[i].motto;
        myPara2.textContent = 'Year Founded: ' + towns[i].yearFounded;
        myPara3.textContent = 'Current Population:' + towns[i].currentPopulation;
        myPara4.textContent = 'Annual Rainfall:' + towns[i].averageRainfall;
        myImg.innerHTML;
   
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myImg);

        section.appendChild(myArticle);
    }

}