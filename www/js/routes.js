
(function(){
  'use strict';
  
angular.module('starter').config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login')

  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller:'LoginCtrl',
    controllerAs:'vm'
  })
  .state('chat', {
    url: '/chat',
    templateUrl: 'templates/chat.html',
    controller:'ChatCtrl',
    controllerAs:'vm'
  });

});
})();