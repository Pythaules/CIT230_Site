const weatherPull = new XMLHttpRequest();
apiURL = "//api.openweathermap.org/data/2.5/weather?";
apiID = "id=5061036";
apiKEY = "&appid=338ef3b2197ac9e5d641b0bd773526c3";
weatherPull.open("GET",apiURL + apiID + apiKEY + "&units=imperial", true);
weatherPull.send();

const forecastPull = new XMLHttpRequest();
apiURL = "//api.openweathermap.org/data/2.5/forecast?";
apiID = "id=5061036";
apiKEY = "&appid=338ef3b2197ac9e5d641b0bd773526c3";
forecastPull.open("GET",apiURL + apiID + apiKEY + "&units=imperial", true);
forecastPull.send();

weatherPull.onload = function() {
    let weatherData = JSON.parse(weatherPull.responseText);
    console.log(weatherData);
}

forecastPull.onload = function() {
    let forecastData = JSON.parse(forecastPull.responseText);
    console.log(forecastData);
}