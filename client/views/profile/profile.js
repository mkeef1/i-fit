(function(){
  'use strict';

  angular.module('i-fit')
  .controller('ProfileCtrl', ['$scope', 'User', function($scope, User){

    User.show().then(function(response){
      $scope.client = response.data.client;
    });

    $scope.update = function(){
      User.update($scope.user).then(function(response){
        console.log(response);
      });
    };
  }]);
})();

