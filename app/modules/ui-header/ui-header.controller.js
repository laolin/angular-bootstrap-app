'use strict';
(function(){

angular.module('ui.header')
.controller('uiHeader',['$scope','$log', uiHeaderController ]);
function uiHeaderController($scope,$log){
  $scope.logoUri='assets/img/logo-32.png';
  $scope.citys = [
    '上海',
    '北京',
    '深圳'
  ];
  $scope.city='上海';
  
  $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  
  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };
}

})();