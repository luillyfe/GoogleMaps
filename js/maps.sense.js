
"use strict";

/** Initialize the propertie's map  **/
var satellite;
function initialize() {
  var mapOptions = {
    //Rua da Bahia, 570 - Centro, Belo Horizonte - MG, 30160-010, Brazil
    center: { lat: -19.919927, lng: -43.936138},
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    heading: 90,
    tilt: 45
  };

  satellite = new google.maps.Map(document.getElementById('satellite'),
      mapOptions);
  
  autoRotate();
}

/** Add listener to a object windows **/
google.maps.event.addDomListener(window, 'load', initialize);

/** Rotate 90 degree **/
function rotate90() {
  var heading = satellite.getHeading() || 0;
  satellite.setHeading(heading + 90);
}

/** autoRotate **/
function autoRotate() {
  if (satellite.getTilt() != 0) {
    window.setInterval(rotate90, 3000);
  }
}