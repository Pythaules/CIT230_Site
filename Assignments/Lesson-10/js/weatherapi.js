const weatherRequest = new XMLHttpRequest();
apiURL = "//api.openweathermap.org/data/2.5/weather?";
apiID = "id=5061036";
apiKEY = "&appid=338ef3b2197ac9e5d641b0bd773526c3";
weatherRequest.open("GET",apiURL + apiID + apiKEY + "&units=imperial", true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('place').innerHTML = weatherData.name;
    document.getElementById('currentTemp').innerHTML = weatherData.main.temp;
    document.getElementById('windSpeed').innerHTML = weatherData.wind.speed;

    const iconcode = weatherData.weather[0].icon;
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);
    document.getElementById('weather_icon').src = icon_path;
}