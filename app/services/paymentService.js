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
            var total = Object.keys(expensesPerPerson).reduce(function (total, personId) {
                return total + expensesPerPerson[personId];
            }, 0);
            this.list.push({
                payerId: payer.id,
                total: total,
                expenses: expensesPerPerson
            });
        }
    };

    angular.module('GroupExpenseTracker.paymentService', [])
        .factory('paymentService', function (personsService) {
            var persons = personsService.getAll();
            var ps = new PaymentService();
            var totalPayments = 5;
            while (totalPayments--) {
                ps.add(
                    getRandomPerson(personsService),
                    persons.reduce(function (map, person) {
                        map[person.id] = getRandomLunchPriceForPerson();
                        return map;
                    }, {})
                );
            }
            return ps;
        });

    function getRandomPerson(personsService) {
        var persons = personsService.getAll();
        var randomIndex = Math.floor(Math.random() * persons.length);
        return persons[randomIndex];
    }

    function getRandomLunchPriceForPerson() {
        return Math.floor(Math.random() * 6) * 0.5 + 4.0;
    }

})();
