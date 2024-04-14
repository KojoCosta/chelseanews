// Initialize and add the map
function initMap() {
    // The location of Chelsea
    var chelsea = { lat: 51.481583, lng: -0.191201 };
    // The map, centered at Chelsea
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 14, center: chelsea });
    // The marker, positioned at Chelsea
    var marker = new google.maps.Marker({ position: chelsea, map: map });
}
