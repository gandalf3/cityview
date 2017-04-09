'use strict';

var map = L.map('map').setView([44.0539, -123.0944], 12);

// http://a.tile.stamen.com/toner/${z}/${x}/${y}.png
L.tileLayer("http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png", { maxzoom : 18 }).addTo(map)


var colors = {
	"active":	'#ff5e00',
	"unactive":	'#3388ff',
}


// add neighborhoods
function assignNeighborPopup(feature, layer){
	var popup = L.popup({
		"closeButton": false,
		"className": "neighbor-popup",
		"autoPan": true,
	});
	popup.setContent(feature.properties.name);
 	layer.bindPopup(popup);
	
	layer.addEventListener('mouseover', function (e) {
	        this.openPopup();
		this.setStyle({color: colors['active']});
     	});

        layer.addEventListener('mouseout', function (e) {
                this.closePopup();
		this.setStyle({color: colors['unactive']});
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

