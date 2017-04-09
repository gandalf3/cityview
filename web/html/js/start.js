'use strict';

var map = L.map('map').setView([44.0539, -123.0944], 12);

// http://a.tile.stamen.com/toner/${z}/${x}/${y}.png
L.tileLayer("http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png", { maxzoom : 18 }).addTo(map)


// add neighborhoods
function assignNeighborPopup(feature, layer){
	var popup = L.popup({
		"closeButton": false,
		"className": "neighbor-popup",
		"autoPan": false,
	});
	popup.setContent(feature.properties);
 	layer.bindPopup(popup);
	
	layer.addEventListener('mouseover', function (e) {
	        this.openPopup();
     	});

        layer.addEventListener('mouseout', function (e) {
                this.closePopup();
	});
	
}
var neighborStyle = {
	"weight": 1,
}

var neighborPolys = new L.GeoJSON.AJAX("data/neighborhoods_geo.json",{
	onEachFeature:assignNeighborPopup,
	style:neighborStyle,
});

neighborPolys.addTo(map);

