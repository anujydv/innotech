function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
}

function showPosition(position) {
    var lat = position.coords.latitude;
    console.log(lat);
    var lon = position.coords.longitude;
    console.log(lon);
    // L.marker([lat, lon]).addTo(map).bindPopup("<b>your location</b>").openPopup();

}