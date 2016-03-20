(function() {

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
                expenses: amountsPerPerson
            });
        }
    };

    angular.module('GroupExpenseTracker.paymentService', [])
        .service('paymentService', PaymentService);

    function getRandomPerson(personsService) {
        var persons = personsService.getAll();
        var randomIndex = Math.floor(Math.random() * persons.length);
        return persons[randomIndex];
    }

    function getRandomLunchPriceForPerson() {
        return Math.floor(Math.random() * 6) * 0.5 + 4.0;
    }

})();
