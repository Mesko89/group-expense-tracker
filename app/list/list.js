'use strict';

angular.module('GroupExpenseTracker.list', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/list', {
            templateUrl: 'list/list.html',
            controller: 'ListCtrl'
        });
    }])

    .controller('ListCtrl', function ($scope, personsService, paymentService) {
        var payments = paymentService.getAll()
            .map(function (payment) {
                var payer = personsService.getById(payment.payerId);
                return {
                    payerName: payer.name,
                    total: payment.total,
                    expenses: Object.keys(payment.expenses).map(function (personId) {
                        return {
                            personName: personsService.getById(personId).name,
                            value: payment.expenses[personId]
                        }
                    })
                }
            });
        $scope.payments = payments;
    });