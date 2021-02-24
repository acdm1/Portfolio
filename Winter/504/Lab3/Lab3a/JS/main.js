var map = L.map('map').setView([41.67534023292474, -86.24773408627753], 12);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWNkbTEiLCJhIjoiY2toMmY5cmw0MDEyMDJ1bzR5eXZzam5paCJ9.Whiar4FcVdqRUV6VEG93Ig', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    // accessToken: 'pk.eyJ1IjoiYWNkbTEiLCJhIjoiY2toMmY5cmw0MDEyMDJ1bzR5eXZzam5paCJ9.Whiar4FcVdqRUV6VEG93Ig'
}).addTo(map);

var drawnItems = L.featureGroup().addTo(map);

  new L.Control.Draw({
      draw : {
          polygon : true,
          polyline : false,      // Lines disabled
          rectangle : false,     // Rectangles disabled
          circle : false,        // Circles disabled
          circlemarker : false,  // Circle markers disabled
          marker: true
      },
      edit : {
          featureGroup: drawnItems
      }
  }).addTo(map);

  map.addEventListener("draw:created", function(e) {
      e.layer.addTo(drawnItems);
      drawnItems.eachLayer(function(layer) {
          var geojson = JSON.stringify(layer.toGeoJSON().geometry);
          console.log(geojson);
      });
  });

  function createFormPopup() {
      var popupContent =
          '<form>' +
          'Title:<br><input type="text" id="input_title"><br>' +
            '<input type="radio" id="input_Pub" name="LocType" value="PublicService">' +
              '<label for="PublicService">Public Service</label><br>' +
            '<input type="radio" id="input_Rec" name="LocType" value="Recreation">' +
              '<label for="Recreation">Recreation</label><br>' +
            '<input type="radio" id="input_Other" name="LocType" value="Other">' +
              '<label for="Other">Other</label><br>' +
          'Address:<br><input type="text" id="input_address"><br>' +
          'Description:<br><input type="text" id="input_desc"><br>' +
          '<input type="button" value="Submit" id="submit">' +
          '</form>'
      drawnItems.bindPopup(popupContent).openPopup();
  }

  map.addEventListener("draw:created", function(e) {
      e.layer.addTo(drawnItems);
      createFormPopup();
  });

  map.addEventListener("draw:created", function(e) {
      e.layer.addTo(drawnItems);
      drawnItems.eachLayer(function(layer) {
          var geojson = JSON.stringify(layer.toGeoJSON().geometry);
          console.log(geojson);
      });
  });

  function setData(e) {

      if(e.target && e.target.id == "submit") {

          // Get user name and description
          var enteredTitle = document.getElementById("input_title").value;
          var enteredDescription = document.getElementById("input_desc").value;
          var enteredAddress = document.getElementById("input_address").value;
          var enteredPublicService = document.getElementById("input_Pub").value;
          var enteredRecreation = document.getElementById("input_Rec").value;
          var enteredOther = document.getElementById("input_Other").value;

          // Print user name and description
          console.log('Title:',enteredTitle);
          console.log('Description:',enteredDescription);
          console.log('Address:', enteredAddress);
          console.log('Type:', enteredPublicService);
          console.log('Type:', enteredRecreation);
          console.log('Type:', enteredOther);

          // Get and print GeoJSON for each drawn layer
          drawnItems.eachLayer(function(layer) {
              var drawing = JSON.stringify(layer.toGeoJSON().geometry);
              console.log(drawing);
          });

          // Clear drawn items layer
          drawnItems.closePopup();
          drawnItems.clearLayers();

      }
  }

document.addEventListener("click", setData);

map.addEventListener("draw:editstart", function(e) {
    drawnItems.closePopup();
});
map.addEventListener("draw:deletestart", function(e) {
    drawnItems.closePopup();
});
map.addEventListener("draw:editstop", function(e) {
    drawnItems.openPopup();
});
map.addEventListener("draw:deletestop", function(e) {
    if(drawnItems.getLayers().length > 0) {
        drawnItems.openPopup();
    }
});
