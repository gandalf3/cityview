'use strict';

var map = L.map('map').setView([44.04826224757115, -123.08966159820558], 15);

// http://a.tile.stamen.com/toner/${z}/${x}/${y}.png
L.tileLayer("http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png", { maxzoom : 18 }).addTo(map)

var pmPoints = new L.GeoJSON.AJAX("data/parking_meters.json",{
    
})

pmPoints.addTo(map);
