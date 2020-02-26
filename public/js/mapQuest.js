function initMap() {
	L.mapquest.key = 'ofapHPE9XGyA8omD4o5BFZnP4aPK1l7l';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	center: [32.8788,-117.2359],
	layers: L.mapquest.tileLayer('map'),
	zoom: 12,
	zoomControl: false
	});
	
	L.marker([32.8788,-117.2359]).addTo(map);
}