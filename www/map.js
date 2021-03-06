var map, infoWindow;
      //mappp
    $( document ).ready(function() {
       initMap();
    });

      function initMap() {
        
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 7.8, lng: 98.3},
          title: "Test",
          zoom: 18
        });
        infoWindow = new google.maps.InfoWindow;

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) { 
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            
            infoWindow.setPosition(pos);
            
           infoWindow.setContent("Your Are HERE !!!");
          
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }

      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
                          
        infoWindow.open(map);
      }