const loc = document.getElementById("location");
const geocoder = new google.maps.Geocoder();

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(lat, lng);
}

function onGeoERR(){
    alert("Can't find your location. No Weather for you.");
}

function geocodeLatLng(lat, lng) {
    const latlng = {
      lat: lat,
      lng: lng,
    };
  
    geocoder
      .geocode({ location: latlng })
      .then((response) => {
        if (response.results[0]) {
          window.alert(response.results[0].formatted_address);
        } else {
          window.alert("No results found");
        }
      })
      .catch((e) => window.alert("Geocoder failed due to: " + e));
  }
  
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoERR);

