mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhbm5pNDIiLCJhIjoiY201cjdmdmJxMDdodTJycHc2a3ExMnVqaiJ9.qKDYRE5K3C9f05Cj_JNbWA'; // Add default public map token from your Mapbox account

const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/mapbox/light-v11', // style URL
    center: [-122.957359, 50.116322], // starting position [lng, lat]
    zoom: 12 // starting zoom level
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
            'fill-opacity': 0.4},
    });

    map.addSource('ski_lifts',{
        "type": 'geojson',
        "data": "https://raw.githubusercontent.com/chann15/GGR472_Lab2/main/lifts.geojson",
    });

    map.addLayer({
        'id': 'ski_lift-layer',
        'type': 'line',
        'source': 'ski_lifts'

    });
    


    map.addSource('dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1'
    });
    map.addLayer(
        {
            'id': 'hillshading',
            'source': 'dem',
            'type': 'hillshade'
        },
        // Insert below land-structure-polygon layer,
        // where hillshading sits in the Mapbox Streets style.
        'land-structure-polygon'
    );

});
