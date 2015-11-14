(function(){
  'use strict';
  
  angular.module('starter').controller('LoginCtrl', LoginCtrl);
   LoginCtrl.$inject = ['$scope', '$rootScope', '$location', 'Auth'];
  function LoginCtrl($scope, $rootScope, $location, Auth){
    var vm = this;
    
    vm.facebookLogin = logarComFace;
    
    function logarComFace(){
    Auth.$authWithOAuthRedirect("facebook").then(function(authData) {
      // User successfully logged in
       $location.path('/chat');
          $scope.$apply();
    }).catch(function(error) {
      if (error.code === "TRANSPORT_UNAVAILABLE") {
        Auth.$authWithOAuthPopup("facebook").then(function(authData) {
           $location.path('/chat');
          $scope.$apply();
          // User successfully logged in. We can log to the console
          // since we’re using a popup here
          console.log(authData);
        });
      } else {
        // Another error occurred
        console.log(error);
      }
       $location.path('/chat');
          $scope.$apply();
    });      
    }

    
  }
})();