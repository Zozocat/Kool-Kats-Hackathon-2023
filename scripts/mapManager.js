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
    if(count > 4){
        console.log("Highest building reached");
        count--;
        console.log(count);
    } else {
        console.log("Change layer")
        console.log(count)
        var imageUrl = "file:///C:/Users/Jamie/OneDrive/Documents/RGUHACKATHON/Kool-Kats-Hackathon-2023/images/loor" + count + ".jpg";
        console.log("Update Map")
        L.imageOverlay(imageUrl, imageBounds).addTo(map);

        lowerTheLevel();
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

        raiseTheLevel();
    }
}


function raiseTheLevel() {  
    document.getElementById('FloorIndicatorText').innerHTML = 'You are now on floor three';  
}  
function lowerTheLevel() {  
    document.getElementById('FloorIndicatorText').innerHTML = 'You are now on floor four';  
}  