/*Legend*/
		var Legend =  new L.Control.Legend({
      position: 'topright',
		});

		mymap.addControl(Legend);
		  $(".legend-container").append( $("#legend") );
/*****************************************************************/
/*Generic Marker*/
		var point = L.marker([47.606, -122.332]).addTo(mymap);
			point.bindPopup("<b>You've Found!</b><br>Seattle, WA.");
/*****************************************************************/
    var circle = L.circle([47.606, -122.332], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
    }).addTo(mymap);
/*****************************************************************/
    var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
    ]).addTo(mymap);
/*****************************************************************/
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    circle.bindPopup("I am a circle.");
    polygon.bindPopup("I am a polygon.");
/*****************************************************************/
