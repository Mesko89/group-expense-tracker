'use strict';

angular.module('GroupExpenseTracker.whoPays', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/who_pays', {
    templateUrl: 'who_pays/who_pays.html',
    controller: 'WhoPaysCtrl'
  });
}])

.controller('WhoPaysCtrl', [function() {

}]);