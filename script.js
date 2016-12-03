(function() {
  'use strict';
angular.module('MyApp',[])
.controller('PluralSController', function($scope){
  $scope.Message="Hello Angular JS!";

  var Person={
    FirstName:"Vigneshwar",
    LastName:"Kundarapu",
    Source:"http://odetocode.com/images/Scott_Allen_2.jpg"
  };
  $scope.Person=Person;
});
})();
