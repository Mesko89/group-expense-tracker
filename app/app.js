'use strict';

// Declare app level module which depends on views, and components
angular.module('GroupExpenseTracker', [
  'ngRoute',
  'activeLinkClass',
  'expensesToHtml',
  'GroupExpenseTracker.personsService',
  'GroupExpenseTracker.paymentService',
  'GroupExpenseTracker.list',
  'GroupExpenseTracker.whoPays',
  'GroupExpenseTracker.addPayment'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/list'});
}]);
