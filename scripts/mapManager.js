// create the map
var map = L.map('map', {
    center: [40.75, -74.2],
    zoom: 13
  });
  
  var imageUrl = "C:\Users\Jamie\OneDrive\Documents\RGUHACKATHON\Kool-Kats-Hackathon-2023\images\loor3.jpg",
    imageBounds = [
      [40.712216, -74.22655],
      [40.773941, -74.12544]
    ];
  
  L.imageOverlay(imageUrl, imageBounds).addTo(map);

