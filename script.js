mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhbm5pNDIiLCJhIjoiY201cjdmdmJxMDdodTJycHc2a3ExMnVqaiJ9.qKDYRE5K3C9f05Cj_JNbWA'; // Add default public map token from your Mapbox account

const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/channi42/cm6x6mopa000h01qu6frx7auy', // style URL           //style URL doesn't seem to work
    center: [-122.957359, 50.116322], // starting position [lng, lat]
    zoom: 12, // starting zoom level
    bearing: 142,
    pitch: 45

});

map.on('load', () => {


    map.addSource('whistler_resort', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/chann15/GGR472_Lab2/main/whistler_ski_resorts_area.geojson' // Your URL to your buildings.geojson file
    });

    map.addLayer({
        'id': 'whistler_resort-layer',
        'type': 'fill',
        'source': 'whistler_resort',
        'paint': {
            'fill-opacity': 0.4,
            'fill-color': '#FFFFFF',
        },
    });

    map.addSource('ski_lifts',{
        "type": 'geojson',
        "data": "https://raw.githubusercontent.com/chann15/GGR472_Lab2/main/lifts.geojson",
    });

    map.addLayer({
        'id': 'ski_lift-layer',
        'type': 'line',
        'source': 'ski_lifts',
        'paint':{
            'line-color': '#0000FF',
            'line-width': 2.3
        }

    });

    map.addSource('Transport_Locations',{
        'type': 'shapefile',
        'data': 'mapbox://mapbox.channi42.27hn8ddz'
    });

    map.addLayer({
        'id': 'Transport_Locations-layer',
        'type': 'points',
        'source': 'Transport_Locations'
    });

});
