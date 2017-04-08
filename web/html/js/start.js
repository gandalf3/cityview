'use strict';

var map = L.map('map').setView([44.0539, -123.0944], 12);

// http://a.tile.stamen.com/toner/${z}/${x}/${y}.png
L.tileLayer("http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png", { maxzoom : 18 }).addTo(map)


// add neighborhoods
var neighborStyle = {
	"weight": 1,
}

var geojsonLayer = new L.GeoJSON.AJAX("data/neighborhoods_geo.json", {
	style: neighborStyle
});
geojsonLayer.addTo(map);
