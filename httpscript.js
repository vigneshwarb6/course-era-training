(function(){
  'use strict';
  angular.module('MyHTTPApp',[])
  .controller('MyHTTPController',function($scope,$http,$filter){
    console.log($filter);

  $http.get("https://api.github.com/users/robconery")
  .then(OnUserControl, OnError);
  var OnUserControl=function(response){
    $scope.userName=response.data;
  };
  var OnError=function(reason){
    $scope.error="Could not fetch the data";
  };
var upper=$filter('lowercase');
$scope.Message=upper('Hi');

});
}());
