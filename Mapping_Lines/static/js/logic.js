﻿// add console.log to see if our code is working
console.log("working");

// Create the map object with a center (US) and zoom level
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the line
// LAX aiport to SFO San Francisco airport
// Then I added Salt Lake City airport (SLC) and Seattle-Tacoma Int (SEA)
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line red
L.polyline(line, {
    color: "blue",
    weight: 4,
    opacity: 0.5,
    dashArray: '10, 10'
}).addTo(map);


// Using MAPBOX STYLES API
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);