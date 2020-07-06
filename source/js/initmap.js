function initMap()
{
    var element = document.getElementById('map');
    var options = {
        zoom: 17,
        center: {lat: 59.9387, lng: 30.323056}
    };

    var myMap = new google.maps.Map(element, options);

    var marker = new google.maps.Marker({
        position: {lat: 59.9387, lng: 30.323056},
        map: myMap,
        icon: 'http://cat.dkha.site/img/map-pin.png'
    })
}
