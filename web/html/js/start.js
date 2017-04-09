'use strict';

var map = L.map('map').setView([44.0539, -123.0944], 12);

// http://a.tile.stamen.com/toner/${z}/${x}/${y}.png
L.tileLayer("http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png", { maxzoom : 18 }).addTo(map)


function popUp(feature, layer, popup){
	popup.setContent(feature.properties)
 	layer.bindPopup(popup);
	
	layer.addEventListener('mouseover', function (e) {
	        this.openPopup();
     	});
	

        layer.addEventListener('mouseout', function (e) {
                this.closePopup()
	});
	
}
// add neighborhoods
var neighborPopup = L.popup({
	"closeButton": false,
	"className": "neighbor-popup",
	"autoPan": false,
});
var neighborStyle = {
	"weight": 1,
}

var neighborPolys = new L.GeoJSON.AJAX("data/neighborhoods_geo.json",{
	onEachFeature:function(f, l) {popUp(f, l, neighborPopup)},
	style:neighborStyle,
});

neighborPolys.addTo(map);

