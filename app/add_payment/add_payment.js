'use strict';

angular.module('GroupExpenseTracker.addPayment', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add_payment', {
    templateUrl: 'add_payment/add_payment.html',
    controller: 'AddPaymentCtrl'
  });
}])

.controller('AddPaymentCtrl', [function() {

}]);