const forecastPull = new XMLHttpRequest();
apiURL = "//api.openweathermap.org/data/2.5/forecast?";

if (window.location.pathname.includes("preston")) {
    var apiID = "id=5061036"
} else if (window.location.pathname.includes("fishhaven")) {
    var apiID = "id=5585010"
} else if (window.location.pathname.includes("sodasprings")) {
    var apiID = "id=5607916"
}

apiKEY = "&appid=338ef3b2197ac9e5d641b0bd773526c3";
forecastPull.open("GET",apiURL + apiID + apiKEY + "&units=imperial", true);
forecastPull.send();

forecastPull.onload = function() {
    let forecastData = JSON.parse(forecastPull.responseText);
    //console.log(forecastData);
    for (l = 0; l < forecastData.list.length; l++) {
        if (forecastData.list[l].dt_txt.includes("18:00:00"))
        populateLists(forecastData.list[l]);
        //console.log(forecastData.list[l]);
    }
}

function populateLists(jsonObj) {
    var lists = jsonObj;

    var iconcode = lists.weather[0].icon;
    var iconalt = lists.weather[0].main;
    var myDiv = document.createElement('div');
    var myPara1 = document.createElement('p');
    var myImg = document.createElement('img');
        myImg.setAttribute("src", "//openweathermap.org/img/w/" + iconcode + ".png");
        myImg.setAttribute("alt", iconalt);
    var myPara2 = document.createElement('p');

    myPara1.textContent = lists.dt_txt.substr(5, 5);
    myImg.innerHTML;
    myPara2.textContent = lists.main.temp + 'degF';
    
   
    myDiv.appendChild(myPara1);
    myDiv.appendChild(myImg);
    myDiv.appendChild(myPara2);


    document.getElementById("forecast").appendChild(myDiv);
}