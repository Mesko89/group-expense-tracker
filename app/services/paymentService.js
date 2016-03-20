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
