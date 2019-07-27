const weatherPull = new XMLHttpRequest();
apiURL = "//api.openweathermap.org/data/2.5/weather?";
var apiID = "id=4140963"

apiKEY = "&appid=338ef3b2197ac9e5d641b0bd773526c3";
weatherPull.open("GET",apiURL + apiID + apiKEY + "&units=imperial", true);
weatherPull.send();

weatherPull.onload = function() {
    let weatherData = JSON.parse(weatherPull.responseText);
    console.log(weatherData);
    cTemp = weatherData.main.temp;
    cSpeed = weatherData.wind.speed;
    wChill = Math.round(35.74 + 0.6215 * cTemp - 35.75 * Math.pow(cSpeed, 0.16) + 0.4275 * cTemp * Math.pow(cSpeed, 0.16));
    windDeg = weatherData.wind.deg;

    document.getElementById('dcWeather').innerHTML = weatherData.weather[0].main;
    document.getElementById('dcHigh').innerHTML = weatherData.main.temp_max;
    document.getElementById('dcChill').innerHTML = wChill
    document.getElementById('dcHumidity').innerHTML = weatherData.main.humidity;
    document.getElementById('dcWindSpeed').innerHTML = weatherData.wind.speed;
    document.getElementById('dcWinddir').innerHTML = degToCompass(windDeg);
}

function degToCompass(num) { 
    while( num < 0 ) num += 360 ;
    while( num >= 360 ) num -= 360 ; 
    val= Math.round( (num -11.25 ) / 22.5 ) ;
    arr=["N","NNE","NE","ENE","E","ESE", "SE", 
          "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"] ;
    return arr[ Math.abs(val) ] ;
}