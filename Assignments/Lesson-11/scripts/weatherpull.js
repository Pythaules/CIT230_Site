const weatherPull = new XMLHttpRequest();
apiURL = "//api.openweathermap.org/data/2.5/weather?";

if (window.location.pathname.includes("preston")) {
    var apiID = "id=5061036"
} else if (window.location.pathname.includes("fishhaven")) {
    var apiID = "id=5585010"
} else if (window.location.pathname.includes("sodasprings")) {
    var apiID = "id=5607916"
}

apiKEY = "&appid=338ef3b2197ac9e5d641b0bd773526c3";
weatherPull.open("GET",apiURL + apiID + apiKEY + "&units=imperial", true);
weatherPull.send();

weatherPull.onload = function() {
    let weatherData = JSON.parse(weatherPull.responseText);
    console.log(weatherData);
    cTemp = weatherData.main.temp;
    cSpeed = weatherData.wind.speed;
    wChill = Math.round(35.74 + 0.6215 * cTemp - 35.75 * Math.pow(cSpeed, 0.16) + 0.4275 * cTemp * Math.pow(cSpeed, 0.16));

    document.getElementById('currentWeather').innerHTML = weatherData.weather[0].main;
    document.getElementById('currentHigh').innerHTML = weatherData.main.temp_max;
    document.getElementById('currentWindChill').innerHTML = wChill
    document.getElementById('currentHumidity').innerHTML = weatherData.main.humidity;
    document.getElementById('currentWindSpeed').innerHTML = weatherData.wind.speed;
}