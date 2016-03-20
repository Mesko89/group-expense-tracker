'use strict';

angular.module('GroupExpenseTracker.addPayment', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/add_payment', {
            templateUrl: 'add_payment/add_payment.html',
            controller: 'AddPaymentCtrl'
        });
    }])

    .controller('AddPaymentCtrl', function ($scope, $location, personsService, paymentService) {
        $scope.payerError = false;
        $scope.triedSubmit = false;
        $scope.payer = null;
        $scope.total = 0;

        $scope.personExpenses = personsService.getAll().map(function (person) {
            return {
                id: person.id, name: person.name, amount: 0
            }
        });

        $scope.selectPayer = function (payer) {
            $scope.payerError = false;
            $scope.payer = payer;
        };

        $scope.addPayment = function () {
            $scope.triedSubmit = true;
            if (!$scope.payer) {
                $scope.payerError = true;
                return;
            }
            if ($scope.total === 0) {
                return;
            }
            paymentService.add($scope.payer, $scope.personExpenses.reduce(function(personExpenseValue, d) {
                personExpenseValue[d.id] = d.amount;
                return personExpenseValue;
            }, {}));
            $location.path('/list');
        };

        $scope.calculateTotal = function () {
            if ($scope.total !== 0) $scope.triedSubmit = false;
            $scope.total = $scope.personExpenses.reduce(function (total, personAmount) {
                if (!personAmount.amount) personAmount.amount = 0;
                personAmount.amount = Math.abs(personAmount.amount);
                return total + personAmount.amount;
            }, 0);
        };
    });