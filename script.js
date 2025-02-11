mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhbm5pNDIiLCJhIjoiY201cjdmdmJxMDdodTJycHc2a3ExMnVqaiJ9.qKDYRE5K3C9f05Cj_JNbWA'; // Add default public map token from your Mapbox account

// This creates the constant variable map that displays the mapbox map
const map = new mapboxgl.Map({
    container: 'my-map', 
    style: 'mapbox://styles/channi42/cm6x6mopa000h01qu6frx7auy',
    center: [-122.94, 50.1],
    zoom: 12.5,
    bearing: 142,
    pitch: 45

});

//This loads the map so it can be seen
map.on('load', () => {

//This adds the data that outlines the ski resort
    map.addSource('whistler_resort', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/chann15/GGR472_Lab2/main/whistler_ski_resorts_area.geojson' // Your URL to your buildings.geojson file
    });
//This provides physical aesthetic element to the data
    map.addLayer({
        'id': 'whistler_resort-layer',
        'type': 'fill',
        'source': 'whistler_resort',
        'paint': {
            'fill-opacity': 0.5,
            'fill-color': '#FFFFFF',
        },
    });

//This adds the data that outlines the ski runs
    map.addSource('ski_runs',{
        "type": 'geojson',
        "data": "https://raw.githubusercontent.com/chann15/GGR472_Lab2/main/runs.geojson",
    });

//This provides physical aesthetic element to the data
    map.addLayer({
        'id': 'ski_runs-layer',
        'type': 'line',
        'source': 'ski_runs',
        'paint': {'line-color': [
                'match',
                ['get', 'colorName'],
                'green', '#2E6F40', 
                'blue', '#2E5984',
                'black', '#000000',
                'red', '#FF0000',
                '#808080'],
                'line-width': 2
        }
    });

//This adds the data that outlines the ski lifts
    map.addSource('ski_lifts',{
        "type": 'geojson',
        "data": "https://raw.githubusercontent.com/chann15/GGR472_Lab2/main/lifts.geojson",
    });

//This provides physical aesthetic element to the data, more specifically the black outline
    map.addLayer({
        'id': 'ski_lift-outline',
        'type': 'line',
        'source': 'ski_lifts',
        'paint': {
            'line-color': '#FFD700', 
            'line-width': 6,         
            'line-opacity': 0.9     
        }
    });

//This provides physical aesthetic element to the data more specifically the yellow glow
    map.addLayer({
        'id': 'ski_lift-layer',
        'type': 'line',
        'source': 'ski_lifts',
        'paint': {
            'line-color': '#000000', 
            'line-width': 1.5          
        }
    });

//This adds an element of control for the user when navigating the Mapbox map
    map.addControl(new mapboxgl.NavigationControl());

    
});

