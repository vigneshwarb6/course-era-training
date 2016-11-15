(function(){
  'use strict';
angular.module('MyFirstApp',[])
.controller('CalcAsciiController',function ($scope){
$scope.name="";
$scope.totalValue=0;

$scope.displayNumeric=function(){
  var totalCalcValue=calculateAscii($scope.name);
  $scope.totalValue=totalCalcValue;
};

function calculateAscii(string){
  var totalStringValue=0;
  for(var i=0;i<string.length;i++)
  {
    totalStringValue+=string.charCodeAt(i);
  }
  return totalStringValue;
}
});
})();
