(function(){
  'use strict';
  
  angular.module('starter').controller('LoginCtrl', LoginCtrl);
   LoginCtrl.$inject = ['$scope', '$rootScope', '$location'];
  function LoginCtrl($scope, $rootScope, $location){
    var vm = this;
    
    vm.facebookLogin = logarComFace;
    
    function logarComFace(){
            ref.authWithOAuthPopup("facebook", function(error, authData) {
           
          if (error) {
            console.log("Login Failed!", error);
          } else {
           
            console.log("Authenticated successfully with payload:", authData);
              console.log('Logado como '+ authData.facebook.displayName); 
          };
          $location.path('/chat');
          $scope.$apply();
        });      
    }

    
  }
})();