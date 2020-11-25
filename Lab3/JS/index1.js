mapboxgl.accessToken = 'pk.eyJ1IjoiYWNkbTEiLCJhIjoiY2toMmY5cmw0MDEyMDJ1bzR5eXZzam5paCJ9.Whiar4FcVdqRUV6VEG93Ig';
  var 地図1 = new mapboxgl.Map({
    container: '地図1',
    style: 'mapbox://styles/acdm1/ckhj5tn232elh19qmilnketb2/draft',
    center: [-122.350, 47.075],
    zoom: 8.2
  });
//****************************************//
地図1.addControl(new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl
  })
);

地図1.addControl(new mapboxgl.FullscreenControl());

// 地図1.addControl(new mapboxgl.NavigationControl());
//****************************************//

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
  var layerId = layer.target.id;
  地図1.setStyle('mapbox://styles/mapbox/' + layerId);
}

for (var i = 0; i < inputs.length; i++) {
  inputs[i].onclick = switchLayer;
}

//****************************************//

地図1.on('load', function () {
  地図1.addSource('Election_Precincts', {
    'type': 'geojson',
    'data': 'https://opendata.arcgis.com/datasets/d2a329c8ea3a4855b2f9cf1fcda9870b_0.geojson'
  });

  地図1.addLayer({
      'id': 'Election Precincts-layer',
      'type': 'fill',
      'source': 'Election_Precincts',
      'paint': {
        'fill-color': 'rgba(41,226,173,.15)',
        'fill-outline-color': 'rgba(250,0,225,.30)'
      }
    });

  地図1.on('click', 'Election Precincts-layer', function (e) {
    new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML("Precinct: " + "<b>" + e.features[0].properties.PRECINCT + "</b>" + "<br>" + "FID: " + "<b>" + e.features[0].properties.FID + "</b>")
    .addTo(地図1);
  });

  地図1.on('mouseenter', 'Election Precincts-layer', function () {
    地図1.getCanvas().style.cursor = 'pointer';
  });

  地図1.on('mouseleave', 'Election Precincts-layer', function () {
    地図1.getCanvas().style.cursor = '';
    });
  });

//****************************************//
