const weatherObject = new XMLHttpRequest();
weatherObject.open("GET","//api.openweathermap.org/data/2.5/weather?zip=23452,us&appid=338ef3b2197ac9e5d641b0bd773526c3", true);
weatherObject.send();



weatherObject.onload = function () {
let weatherInfo = new JSON.parse(weatherObject.responseText);
console.log(weatherInfo);