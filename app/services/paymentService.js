(function() {

    function PaymentService() {
        this.list = [];
    }

    PaymentService.prototype = {
        list: [],
        getAll: function () {
            return this.list;
        },
        add: function (payer, expensesPerPerson) {
            this.list.push({
                payerId: payer.id,
                expenses: expensesPerPerson
            });
        }
    };

    angular.module('GroupExpenseTracker.services', [])
        .service('paymentService', PaymentService);

})();
