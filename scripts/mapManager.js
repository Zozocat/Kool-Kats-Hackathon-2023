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

var count = 3;

function upButtonClick(){
    count++;
    if(count > 5){
        count--;
        console.log(count);
        alert("You can't go any higher");
    } else if(count == 5){
        alert("Highest level reached");        
        console.log("Change layer")
        console.log(count)
        var imageUrl = "file:///C:/Users/Jamie/OneDrive/Documents/RGUHACKATHON/Kool-Kats-Hackathon-2023/images/loor" + count + ".jpg";
        console.log("Update Map")
        L.imageOverlay(imageUrl, imageBounds).addTo(map);
    } else {
        console.log("Change layer")
        console.log(count)
        var imageUrl = "file:///C:/Users/Jamie/OneDrive/Documents/RGUHACKATHON/Kool-Kats-Hackathon-2023/images/loor" + count + ".jpg";
        console.log("Update Map")
        L.imageOverlay(imageUrl, imageBounds).addTo(map);
        raiseTheLevel();

    }
}

function downButtonClick(){
    count--;
    if(count < 3){
        console.log("Lowest floor reached");
        count++;
        console.log(count);
    } else {
        console.log(count)
        var imageUrl = "file:///C:/Users/Jamie/OneDrive/Documents/RGUHACKATHON/Kool-Kats-Hackathon-2023/images/loor" + count + ".jpg"
        map.invalidateSize();
        L.imageOverlay(imageUrl, imageBounds).addTo(map);

        lowerTheLevel();
    }
}


function raiseTheLevel() {  
    document.getElementById('FloorIndicatorText').innerHTML = 'You have gone up a floor';  
}  
function lowerTheLevel() {  
    document.getElementById('FloorIndicatorText').innerHTML = 'You have gone down a floor';  
}  

map.on('click', function(e){
    var coord = e.latlng;
    var lat = coord.lat;
    var lng = coord.lng;
    console.log("You clicked the map at latitude: " + lat + " and longitude: " + lng);

    // var myIcon = L.icon({
    //     iconUrl: 'images/CoolCatsIcon.png',
    //     iconSize: [32, 60],
    //     iconAnchor: [22, 94],
    //     popupAnchor: [-3, -76],
    // });

    // console.log("Pinned")
    // L.marker([lng, lat], {icon:myIcon}).addTo(map);
    var marker = L.marker([lat, lng]).addTo(map);
});