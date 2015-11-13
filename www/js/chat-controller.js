(function(){
  'use strict';
  
  angular.module('starter').controller('ChatCtrl', ChatCtrl);
  ChatCtrl.$inject = ['$scope', '$firebaseArray'];
  
  function ChatCtrl($scope, $firebaseArray){
    var vm = this;
    var ref = new Firebase('https://blazing-inferno-4753.firebaseio.com/posts');
    vm.posts = [];
    
    
        activate();

        function activate() {
            vm.posts = $firebaseArray(ref);
        }
  }
})();