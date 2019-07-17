var map;
if (window.location.pathname.includes("preston")) {
    var posIt = {center: {lat: 42.0963, lng: -111.8766}, zoom: 13};
} else if (window.location.pathname.includes("fishhaven")) {
    var posIt = {center: {lat: 42.0380, lng: -111.4004}, zoom: 13};
} else if (window.location.pathname.includes("sodasprings")) {
    var posIt = {center: {lat: 42.6614, lng: -111.6062}, zoom: 13};
} else {
    var posIt = {center: {lat: 42.3213, lng: -111.5419}, zoom: 9};
}
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), posIt);
}    
