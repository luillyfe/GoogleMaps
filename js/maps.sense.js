
"use strict";

/** Initialize the propertie's map  **/
var satellite;
var input;
var types;
var search;

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

  /** @type {HTMLInputElement} */
  input = (document.getElementById('address'));
  search = (document.getElementById('search'));
  types = document.getElementById('type-selector');
  
  satellite.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  satellite.controls[google.maps.ControlPosition.TOP_LEFT].push(search);
  satellite.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(types);

  var componentRestrictions = { 'country':'co' };
  var autocomplete = new google.maps.places.Autocomplete(input, componentRestrictions)

  google.maps.event.addDomListener(types, 'change', change);
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

/** Search in the map **/
function searchAddress() {
  if( input.value != "" && input.value != undefined )
    codeAddress();
}

/** Request to Geocoding Service **/
function codeAddress() {
  var address = document.getElementById('address').value;
  var tittle = document.getElementById('tittle');
  var geocoder = new google.maps.Geocoder();

  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      satellite.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: satellite,
          position: results[0].geometry.location
      });

      tittle.innerHTML   = results[0].formatted_address +
        " " + results[0].geometry.location;
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
      
      tittle.innerHTML = status;
    }
  });

}

/**  **/
function change() { 
  input.value = types.value;
  search.click(); 
}