// Initialize and add the map
function initMap() {
    // The location of Kente Village
    var kenteVillage = { lat: 6.7960527, lng: -1.5030756 };
    // The map, centered at Kente Village
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 17, center: kenteVillage });
    // The marker, positioned at Kente Village
    var marker = new google.maps.Marker({ position: kenteVillage, map: map });
}
