var light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamthbmcxIiwiYSI6ImNrZ3d5NjR3NDBldzgycW8zdDZ0NTZvYjAifQ.lUQQ9nNNJryYS05ye4FpLA', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id:'mapbox/light-v10',
  tileSize: 512,
  zoomOffset: -1,
});

var dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamthbmcxIiwiYSI6ImNrZ3d5NjR3NDBldzgycW8zdDZ0NTZvYjAifQ.lUQQ9nNNJryYS05ye4FpLA', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id:'mapbox/dark-v10',
  tileSize: 512,
  zoomOffset: -1,
});

var map = L.map('map', {layers:[light, dark]}).fitWorld();
var baseMaps = {
  "light": light,
  "dark": dark
};

L.control.layers(baseMaps).addTo(map);

L.easyButton( '<span class="diamond">♦</span>', function(){
  alert("\n~ ¡ FIND YOURSELF ! ~\n\nWe don't collect user data here.\nPress OK, and feel safe to proceed.");
  map.locate({setView: true, maxZoom: 16});
}).addTo(map);


function onLocationFound(e) {
  var radius = e.accuracy;
  L.marker(e.latlng).addTo(map)
  .bindPopup("You are within " + Math.round(radius * 3.28084) + " feet of this point").openPopup();
  if (radius <= 100) {
    L.circle(e.latlng, radius, {color: 'purple'}).addTo(map);
  }
  else{
    L.circle(e.latlng, radius, {color: 'green'}).addTo(map);
  }

  var times = SunCalc.getTimes(new Date(), e.latitude, e.longitude);
  var sunrise = times.sunrise.getHours();
  var sunset = times.sunset.getHours();

  var currentTime = new Date().getHours();
  if (sunrise < currentTime && currentTime < sunset){
    map.removeLayer(dark);
    map.addLayer(light);
  }
  else {
    map.removeLayer(light);
    map.addLayer(dark);
  }
}

map.on('locationfound', onLocationFound);
function onLocationError(e) {
  alert(e.message);
}

map.on('locationerror', onLocationError);
