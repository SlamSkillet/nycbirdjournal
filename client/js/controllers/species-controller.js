app.controller('speciesController', ['$scope', '$http', function($scope, $http) {

  // $scope.$watch('search', function() {
  //   fetch();
  // });

  // $scope.search = 'phalacrocorax%20auritus';

  var speciesparam = 'phalacrocorax%20auritus';

  $scope.sortChange = function() {
    console.log($scope.speciessort);   
    switch ($scope.speciessort) {
            case 'Double-Crested Cormorant':
                speciesparam = 'phalacrocorax%20auritus';
                break;
            case 'Peregrine Falcon':
                speciesparam = 'falco%20peregrinus';
                break;
        }
    console.log(speciesparam);    
    fetch();
  }

  var mapdata = [];

  function fetch() {
    $http.get("http://ebird.org/ws1.1/data/obs/geo_spp/recent?lng=-73.94&lat=40.70&sci=" + speciesparam + "&dist=25&back=10&maxResults=500&locale=en_US&fmt=json")
      .then(function(response) {
        $scope.details = response.data;
        mapdata = response.data;
        mapInit(speciesparam);
      });
  }

function mapInit(speciesparam) {

      var map;
      var mapmarker;
      if (speciesparam === 'phalacrocorax%20auritus') {
        mapMarker = 'img/cutout_cormorantsmall.png';
      }
      if (speciesparam === 'falco%20peregrinus') {
        mapMarker = 'img/cutout_peregrinefalconsmall.png';
      }

      function initialize() {
        var mapOptions = {
          zoom: 11,
          center: {lat: 40.70, lng: -73.94},
          disableDefaultUI: true,
          styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ebe3cd"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#523735"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f1e6"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#c9b2a6"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#dcd2be"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#ae9e90"
                }
              ]
            },
            {
              "featureType": "administrative.neighborhood",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "landscape.natural",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "poi",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#93817c"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#a5b076"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#447530"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f5f1e6"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#fdfcf8"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f8c967"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#e9bc62"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e98d58"
                }
              ]
            },
            {
              "featureType": "road.highway.controlled_access",
              "elementType": "geometry.stroke",
              "stylers": [
                {
                  "color": "#db8555"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#806b63"
                }
              ]
            },
            {
              "featureType": "transit",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#8f7d77"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#ebe3cd"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dfd2ae"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                {
                  "color": "#b9d3c2"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#92998d"
                }
              ]
            }
          ]
        };

        map = new google.maps.Map(document.getElementById('map'),
            mapOptions);

        mapdata.forEach(function (el, idx) {
          var marker = new google.maps.Marker({
            position: {lat: el.lat, lng: el.lng},
            map: map,
            icon: mapMarker 
          });
        });
      }

      initialize();
      //google.maps.event.addDomListener(window, 'load', initialize);

    }




      
    

  // $scope.getFilter = function() {
  //       switch ($scope.filter) {
  //           case 'All':
  //               return undefined;
  //           case 'House Sparrow':
  //               return {species: 'House Sparrow'};
  //           case 'Pigeon':
  //               return {species: 'Pigeon'};
  //           case 'European Starling':
  //               return {species: 'European Starling'};
  //           case 'Monk Parakeet':
  //               return {species: 'Monk Parakeet'};
  //           case 'Red-Tailed Hawk':
  //               return {species: 'Red-Tailed Hawk'};
  //           case 'Double-Crested Cormorant':
  //               return {species: 'Double-Crested Cormorant'};
  //           case 'Peregrine Falcon':
  //               return {species: 'Peregrine Falcon'};
  //           case 'Bufflehead':
  //               return {species: 'Bufflehead'};
  //           case 'American Woodcock':
  //               return {species: 'American Woodcock'};
  //           case 'Mallard':
  //               return {species: 'Mallard'};
  //           case 'Northern Cardinal':
  //               return {species: 'Northern Cardinal'};
  //           case 'Herring Gull':
  //               return {species: 'Herring Gull'};
  //           case 'American Robin':
  //               return {species: 'American Robin'};            
  //           case 'Other':
  //               return {species: 'Other'};
  //           default:
  //               return undefined;
  //       }
  //   }

}]);