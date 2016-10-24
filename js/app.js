var angularApp = angular.module('winning', ['ngRoute', 'ui.router', 'ngResource', 'ngMaterial', 'ngAnimate']);

angularApp.config(function($mdThemingProvider,$stateProvider) {
            $mdThemingProvider.theme('default')
              .primaryPalette('teal')
              .accentPalette('orange');

            $stateProvider
            .state('dashboard', {
              url:'/dashboard',
              templateUrl:'list/dashboard.html',
              controller:'AppCtrl as vm'
            });
          });



angularApp.controller("AppCtrl",['$scope','$resource','$filter',function($scope,$resource,$filter){
  var vm=this;
  console.log('hi');
  $scope.items = [1, 2, 3, 4, 5, 6, 7];
      $scope.selectedItem;
      $scope.getSelectedText = function() {
        if ($scope.selectedItem !== undefined) {
          return "You have selected: Item " + $scope.selectedItem;
        } else {
          return "Please select an item";
        }
      };


}])
