mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhbm5pNDIiLCJhIjoiY201cjdmdmJxMDdodTJycHc2a3ExMnVqaiJ9.qKDYRE5K3C9f05Cj_JNbWA'; // Add default public map token from your Mapbox account

const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/mapbox/light-v11', // style URL
    center: [-122.957359, 50.116322], // starting position [lng, lat]
    zoom: 9 // starting zoom level
});

map.on('load', () => {
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

