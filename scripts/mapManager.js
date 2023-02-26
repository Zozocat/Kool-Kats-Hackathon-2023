   // All the code for the leaflet map will come here
      // create the map
      var map = L.map('map', {
        center: [40.75, -74.2],
        zoom: 15
    });
    
    //Need to replace this with a proper URL
    var imageUrl = "file:///C:/Users/Jamie/OneDrive/Documents/RGUHACKATHON/Kool-Kats-Hackathon-2023/images/loor3.jpg",
    imageBounds = [
        [40.712216, -74.22655],
        [40.773941, -74.12544]
    ];
      
    L.imageOverlay(imageUrl, imageBounds).addTo(map);
    console.log("Map loaded")
    
    map.on('click', function(e){
        var coord = e.latlng;
        var lat = coord.lat;
        var lng = coord.lng;
        console.log("You clicked the map at latitude: " + lat + " and longitude: " + lng);
        var marker = L.marker([lat, lng]).addTo(map);
    });