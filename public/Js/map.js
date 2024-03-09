
        mapboxgl.accessToken = mapToken;
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            center: [73.8567,18.5204], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });
    