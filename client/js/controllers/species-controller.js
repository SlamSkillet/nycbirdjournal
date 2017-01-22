app.controller('speciesController', ['$scope', '$http', function($scope, $http) {

  var speciesparam = 'phalacrocorax%20auritus';

  $scope.sortChange = function() {
    console.log($scope.speciessort);   
    switch ($scope.speciessort) {
            case 'House Sparrow':
                speciesparam = 'passer%20domesticus';
                break;
            case 'Pigeon':
                speciesparam = 'columba%20livia';
                break;
            case 'European Starling':
                speciesparam = 'sturnus%20vulgaris';
                break;
            case 'Monk Parakeet':
                speciesparam = 'myiopsitta%20monachus';
                break;
            case 'Double-Crested Cormorant':
                speciesparam = 'phalacrocorax%20auritus';
                break;
            case 'Peregrine Falcon':
                speciesparam = 'falco%20peregrinus';
                break;
            case 'Red-Tailed Hawk':
                speciesparam = 'buteo%20jamaicensis';
                break;
            case 'American Woodcock':
                speciesparam = 'scolopax%20minor';
                break;
            case 'Bufflehead':
                speciesparam = 'bucephala%20albeola';
                break;
            case 'Mallard':
                speciesparam = 'anas%20platyrhynchos';
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
      if (speciesparam === 'passer%20domesticus') {
        mapMarker = 'img/cutout_housesparrowsmall.png';
      }
      if (speciesparam === 'columba%20livia') {
        mapMarker = 'img/cutout_pigeonsmall.png';
      }
      if (speciesparam === 'sturnus%20vulgaris') {
        mapMarker = 'img/cutout_starlingsmall.png';
      }
      if (speciesparam === 'myiopsitta%20monachus') {
        mapMarker = 'img/cutout_monkparakeetsmall.png';
      }
      if (speciesparam === 'buteo%20jamaicensis') {
        mapMarker = 'img/cutout_redtailedhawksmall.png';
      }
      if (speciesparam === 'phalacrocorax%20auritus') {
        mapMarker = 'img/cutout_cormorantsmall.png';
      }
      if (speciesparam === 'falco%20peregrinus') {
        mapMarker = 'img/cutout_peregrinefalconsmall.png';
      }
      if (speciesparam === 'scolopax%20minor') {
        mapMarker = 'img/cutout_woodcocksmall.png';
      }
      if (speciesparam === 'bucephala%20albeola') {
        mapMarker = 'img/cutout_buffleheadsmall.png';
      }
      if (speciesparam === 'anas%20platyrhynchos') {
        mapMarker = 'img/cutout_mallardsmall.png';
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

    }

}]);