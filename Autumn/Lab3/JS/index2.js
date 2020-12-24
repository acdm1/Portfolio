mapboxgl.accessToken = 'pk.eyJ1IjoiYWNkbTEiLCJhIjoiY2toMmY5cmw0MDEyMDJ1bzR5eXZzam5paCJ9.Whiar4FcVdqRUV6VEG93Ig';
  var 地図2 = new mapboxgl.Map({
    container: '地図2',
    style: 'mapbox://styles/acdm1/ckhj8419z28cs19s0nfn4mlhw/draft',
    center: [-122.250, 47.070],
    zoom: 8.2
  });
//****************************************//
// 地図2.addControl(new MapboxGeocoder({
//   accessToken: mapboxgl.accessToken,
//   mapboxgl: mapboxgl
//   })
// );

地図2.addControl(new mapboxgl.FullscreenControl());

地図2.addControl(new mapboxgl.NavigationControl());
//****************************************//



//****************************************//
//****************************************//
//****************************************//
