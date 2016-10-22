var angularApp = angular.module('winning', ['ngRoute', 'ngResource', 'ngMaterial', 'ngAnimate']);
console.log('hi');

angularApp.config(function ($routeProvider){
  $routeProvider
  .when ('/',
  {
    templateUrl: 'list/dashboard.html',
    controller: 'AppCtrl',
    controllerAs: 'vm'
  })
  })


angularApp.controller("AppCtrl",['$resource','$filter',function($resource,$filter){
  var vm=this;
  console.log('hi');


}])
