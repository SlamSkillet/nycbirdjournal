app.controller('birdlogController', ['$scope', '$resource', '$http', function ($scope, $resource, $http) {
  var BirdEntry = $resource('/api/birdlog');

  // loading database into angular scope??
  BirdEntry.query(function (results) {
    $scope.birdlogs = results;
  });

  $scope.birdlogs = [];
  $scope.species = 'Pigeon';
  $scope.speciessort = 'All';

  $scope.sortChange = function() {
    $scope.filter = $scope.speciessort;
  }

  $scope.getFilter = function() {
        switch ($scope.filter) {
            case 'All':
                return undefined;
            case 'House Sparrow':
                return {species: 'House Sparrow'};
            case 'Pigeon':
                return {species: 'Pigeon'};
            case 'European Starling':
                return {species: 'European Starling'};
            case 'Monk Parakeet':
                return {species: 'Monk Parakeet'};
            case 'Red-Tailed Hawk':
                return {species: 'Red-Tailed Hawk'};
            case 'Double-Crested Cormorant':
                return {species: 'Double-Crested Cormorant'};
            case 'Peregrine Falcon':
                return {species: 'Peregrine Falcon'};
            case 'Bufflehead':
                return {species: 'Bufflehead'};
            case 'American Woodcock':
                return {species: 'American Woodcock'};
            case 'Mallard':
                return {species: 'Mallard'};
            case 'Northern Cardinal':
                return {species: 'Northern Cardinal'};
            case 'Herring Gull':
                return {species: 'Herring Gull'};
            case 'American Robin':
                return {species: 'American Robin'};            
            case 'Other':
                return {species: 'Other'};
            default:
                return undefined;
        }
    }

  $scope.createMeetup = function () {
    var birdlog = new BirdEntry();

    var d = new Date();
    var date = d.toString();
    var dateShort = date.substring(0, date.length-15);

    birdlog.username = $scope.username;
    birdlog.date = dateShort;
    birdlog.species = $scope.species;
    birdlog.entry = $scope.entry;

    birdlog.$save(function (result) {

      //pulls result from response of meetupsController.create, pushes it to client
      $scope.birdlogs.unshift(result);
      $scope.username = '';
      $scope.species = 'Pigeon';
      $scope.entry = '';
    });
  }

  $scope.deleteMeetup = function (index) {
    var birdlog = $scope.birdlogs[index];

    $http({
      method: 'DELETE',
      url: '/api/birdlog',
      data: { _id : birdlog._id },
      headers: {'Content-Type': 'application/json;charset=utf-8'}
    }).then(function successCallback(response) {
      $scope.birdlogs.splice(index, 1);
    }, function errorCallback(response) {
    });
  }

}]);