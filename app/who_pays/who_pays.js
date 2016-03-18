'use strict';

angular.module('GroupExpenseTracker.whoPays', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/who_pays', {
	templateUrl: 'who_pays/who_pays.html',
	controller: 'WhoPaysCtrl'
  });
}])

.controller('WhoPaysCtrl', ['$scope', 'personsService', function($scope, personsService) {
    var persons = personsService.getAll();
    if (!persons.length) return; // Nothing to do with no person ...
    persons.sort(function (a, b) { return a.balance - b.balance });
    $scope.person = persons[0].name;
}]);