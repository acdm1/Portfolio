mapboxgl.accessToken = 'pk.eyJ1IjoiYWNkbTEiLCJhIjoiY2toMmY5cmw0MDEyMDJ1bzR5eXZzam5paCJ9.Whiar4FcVdqRUV6VEG93Ig';
//****************************************//
var 地図1 = new mapboxgl.Map({
  container: '地図1',
  style: 'mapbox://styles/acdm1/ckidln7eq2smo19ml3fnvt66b/draft',
  center: [-122.350, 47.200],
  zoom: 9.5
});
//****************************************//
地図1.addControl(new mapboxgl.GeolocateControl({
			positionOptions: {
					enableHighAccuracy: true
			},
			showUserLocation: true
	}), 'top-left'
);

地図1.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
  })
);

地図1.addControl(new mapboxgl.FullscreenControl());
//****************************************//
mapboxgl.accessToken = 'pk.eyJ1IjoiYWNkbTEiLCJhIjoiY2toMmY5cmw0MDEyMDJ1bzR5eXZzam5paCJ9.Whiar4FcVdqRUV6VEG93Ig';
//****************************************//
var 地図2 = new mapboxgl.Map({
  container: '地図2',
  style: 'mapbox://styles/acdm1/cki480yel4yut19mzby8szlb5/draft',
  center: [-122.350, 47.200],
  zoom: 9.5
});
//****************************************//
地図2.addControl(new mapboxgl.GeolocateControl({
			positionOptions: {
					enableHighAccuracy: true
			},
			showUserLocation: true
	}), 'top-left'
);

地図2.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
  })
);

地図2.addControl(new mapboxgl.FullscreenControl());
//****************************************//
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Chambers Bay', 'Point Defiance', 'Foothills', 'Sumner Link', 'Interurban', 'Narrows Bridge'],
        datasets: [{
            label: 'Average Age in relation to  Notable Paths',
            data: [55, 75, 62, 42, 35, 67],
            backgroundColor: [
                '#ac7405',
                '#ac7405',
                '#ac7405',
                '#ac7405',
                '#ac7405',
                '#ac7405',
            ],
            borderColor: [
                '#ac7405',
                '#ac7405',
                '#ac7405',
                '#ac7405',
                '#ac7405',
                '#ac7405',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
//****************************************//
//****************************************//
//****************************************//
//****************************************//
//****************************************//
//****************************************//
//****************************************//
//****************************************//
//****************************************//
//****************************************//
//****************************************//
//****************************************//
//****************************************//
//****************************************//
//****************************************//
//****************************************//
//****************************************//
//****************************************//
//****************************************//
//****************************************//
