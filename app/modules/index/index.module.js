'use strict';

angular.module('myApp.index', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/index', {
    templateUrl: 'modules/index/index.template.html',
    controller: ['$scope','$http','$log',function indexCtrl($scope,$http,$log) {
      $http.jsonp('http://api.laolin.com/hello/ip?callback=JSON_CALLBACK&r='+Date.now()).then(function(response) {
          $log.log(response);
          $scope.ip = response.data.ip;
        });

    }]
  });
}]);