(function(){
'use strict';
angular.module('FilterApp',[])
.controller('FilterController',Filterfunc)
.filter('custom',CustomFilterFactory);
Filterfunc.$inject=['$scope'];
function Filterfunc($scope){
  $scope.Message="People like Bentonville"
}

function CustomFilterFactory(){
  return function(input){
    return input+"Hello";
  }
}
})();
