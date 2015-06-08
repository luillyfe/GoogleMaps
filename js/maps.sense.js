
"use strict";

/** Initialize the propertie's map  **/
function initialize() {
  var mapOptions = {
    center: { lat:  6.357621, lng: -75.505078},
    zoom: 14
  };

  var roadMap = new google.maps.Map(document.getElementById('road-map'),
      mapOptions);
  
  var satellite = new google.maps.Map(document.getElementById('satellite'),
      mapOptions);
  satellite.setMapTypeId(google.maps.MapTypeId.SATELLITE);
  
  var hybrid = new google.maps.Map(document.getElementById('hybrid'),
      mapOptions);
  hybrid.setMapTypeId(google.maps.MapTypeId.HYBRID);
  
  var terrain = new google.maps.Map(document.getElementById('terrain'),
      mapOptions);
  terrain.setMapTypeId(google.maps.MapTypeId.TERRAIN);

}

/** Add listener to a object windows **/
google.maps.event.addDomListener(window, 'load', initialize);

/** handle the slide efect **/
$(function() { 
  $("#slides").slidesjs({
    navigation: false, 
    play: { auto: true },
    pagination: false,
    callback: { complete: function(number) {
      if (number==1) document.getElementById("tittle").innerHTML = "Road Map View";
      if (number==2) document.getElementById("tittle").innerHTML = "Satellite Images View";
      if (number==3) document.getElementById("tittle").innerHTML = "Hybrid View";
      if (number==4) document.getElementById("tittle").innerHTML = "Terrain View";
    } }
  });
});