(function () {

    function PaymentService() {
        this.list = [];
    }

    PaymentService.prototype = {
        list: [],
        getAll: function () {
            return this.list;
        },
        add: function (payer, amountsPerPerson) {
            var total = Object.keys(amountsPerPerson).reduce(function (total, personId) {
                return total + amountsPerPerson[personId];
            }, 0);
            this.list.unshift({
                payerId: payer.id,
                total: total,
                amounts: amountsPerPerson
            });
        }
    };

    angular.module('GroupExpenseTracker.paymentService', [])
        .service('paymentService', PaymentService);

})();
