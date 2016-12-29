'use strict';


// Declare app level module which depends on views, and components
angular.module('myApp', [

    'myApp.index',
    'ui.header',
    
    'ui.bootstrap',
    'ngMaterial',
    'ngRoute'
  ]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/index'});
}]);
