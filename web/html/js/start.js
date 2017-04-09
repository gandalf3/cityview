'use strict';

var map = L.map('map').setView([44.0539, -123.0944], 12);

// http://a.tile.stamen.com/toner/${z}/${x}/${y}.png
L.tileLayer("http://a.tile.stamen.com/terrain/{z}/{x}/{y}.png", { maxzoom : 18 }).addTo(map)


function popUp(f, l){
 	l.bindPopup(f.properties);
	
	l.addEventListener('mouseover', function (e) {
	        this.openPopup();
     	});
	

        l.addEventListener('mouseout', function (e) {
                this.closePopup()
	});
	
}
// add neighborhoods
var neighborStyle = {
	"weight": 1,
}
var neighborPolys = new L.GeoJSON.AJAX("data/neighborhoods_geo.json",{
	onEachFeature:popUp,
	style:neighborStyle,
});
neighborPolys.addTo(map);

