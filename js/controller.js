var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope){

  $scope.nbaTeams = {

    'name' : 'Cleveland Cavaliers',
    'location' : 'Cleveland, Ohio',
    'rank' : 'First Place'

  }

})
