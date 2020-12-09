/**Legend**/
var Legend =  new L.Control.Legend({
  position: 'topright',
});

mymap.addControl(Legend);
  $(".legend-container").append( $("#legend") );
/*****************************************************************/
/*Circle*/
var circle = L.circle([47.60, -122.33], {
  color: "#053ae7",
  fillColor: "#053ae7",
  fillOpacity: 0.25,
  radius: 3000
}).addTo(mymap);

/*****************************************************************/
/*Polygon*
var polygon = L.polygon([[47.509, -122.08],[47.503, -122.06],[547.51, -122.047]], {
  color: "green",
  fillColor: "black",
  fillOpacity: 0.25,
}).addTo(mymap);
/*****************************************************************/
/**
  marker.bindPopup("").openPopup();

  circle.bindPopup("This is Downtown Seattle");

  polygon.bindPopup("This zone holds a cluster of issues relating to equality");
/*****************************************************************/
/*****************************************************************/
/*****************************************************************/
/*****************************************************************/
/*****************************************************************/
/*****************************************************************/
