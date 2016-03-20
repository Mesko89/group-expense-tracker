(function () {

    function PersonsService() {
        this.idMap = {};
        this.list = [];
    }

    PersonsService.prototype = {
        idMap: {},
        list: [],
        getById: function (id) {
            return this.idMap[id];
        },
        getAll: function () {
            return this.list;
        },
        add: function (person) {
            if (person.id in this.idMap) return;

            this.idMap[person.id] = person;
            this.list.push(person);
            this.list.sort(function (a, b) {
                return a.name < b.name ? -1 :
                    a.name > b.name ? 1 : 0;
            })
        }
    };

    angular.module('GroupExpenseTracker.personsService', [])
        .factory('personsService', function () {
            var personsService = new PersonsService();
            ['Ben', 'Angela', 'Tom'].forEach(function (n, i) {
                personsService.add({id: i, name: n, balance: 0});
            });
            return personsService;
        });

})();
