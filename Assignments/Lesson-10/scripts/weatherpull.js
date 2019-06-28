const weatherPull = new XMLHttpRequest();
apiURL = "//api.openweathermap.org/data/2.5/weather?";
apiID = "id=5061036";
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

const forecastPull = new XMLHttpRequest();
apiURL = "//api.openweathermap.org/data/2.5/forecast?";
apiID = "id=5061036";
apiKEY = "&appid=338ef3b2197ac9e5d641b0bd773526c3";
forecastPull.open("GET",apiURL + apiID + apiKEY + "&units=imperial", true);
forecastPull.send();


forecastPull.onload = function() {
    let forecastData = JSON.parse(forecastPull.responseText);
    console.log(forecastData);
    for (l = 0; l < forecastData.list.length; l++) {
        if (forecastData.list[l].dt_txt.includes("18:00:00"))
        foreCasts = JSON.parse(forecastData.list[l]);
        console.log(foreCasts);
}
}