let map;
let marker;

/**
 * Initialise the map
 */
function initMap() {
// Set the locations to be displayed
    const uni = {
            lat: 51.509865,
            lng: -0.118092
        },

        map = new google.maps.Map(document.getElementById('map'), {
            center: uni,
            zoom: 13,
        });
// Set the information to be displayed in the clicked location popup window
    const infoWindowString = 'Tech Solutions\n London\n W12 4DY\n 0207 897 458';

    const infoWindow = new google.maps.InfoWindow({
        content: infoWindowString,
    });
// Set the markerto be displayed
    marker = new google.maps.Marker({
        position: uni,
        map: map,
    });
// What happens when you click on the marker - opens the info window
    marker.addListener('click', () => {
        infoWindow.open({
            anchor: marker,
            map,
        });
    });
}