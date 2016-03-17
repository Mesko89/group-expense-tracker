'use strict';

// Declare app level module which depends on views, and components
angular.module('GroupExpenseTracker', [
  'ngRoute',
  'GroupExpenseTracker.services',
  'GroupExpenseTracker.list',
  'GroupExpenseTracker.whoPays',
  'GroupExpenseTracker.addPayment'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/list'});
}]);
