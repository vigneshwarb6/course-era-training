(function(){
  'use strict';
  var ShoppingList=['Milk','Eggs','Grocery','Oreo','Snacks'];
  var ShoppingList2=
  [{
    name:'Oreo',
    quantity:'2'
  },{name:'Chips',quantity:'1'},{name:'Eggs',quantity:'18'}];
  angular.module('ShoppingListApp',[])
  .controller('ShoppingListController',DisplayShoppingList);
  DisplayShoppingList.$inject=['$scope'];
  function DisplayShoppingList($scope){
    $scope.ShoppingList1=ShoppingList;
    $scope.ShoppingList2=ShoppingList2;
    $scope.PushItem=function(){
      var item={
        name:$scope.itemName,
        quantity:$scope.itemQuantity };
      $scope.ShoppingList2.push(item);
      console.log(item.quantity+item.name);
    };
    $scope.RemoveItem4=function(item){
      var index=$scope.ShoppingList2.indexOf(item);
      console.log(item +" " + index);
    $scope.ShoppingList2.splice(index,1);
    };
  }

})();
