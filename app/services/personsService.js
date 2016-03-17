(function() {

    function PersonsService() {
        this.idMap = {};
        this.list = [];
        ['Ben', 'Angela', 'Tom'].forEach(function (n, i) {
            this.add({id: i, name: n});
        }.bind(this));
    }

    PersonsService.prototype = {
        idMap: {},
        list: [],
        getById: function (id) {
            return this.list[id];
        },
        getAll: function () {
            return this.list;
        },
        add: function (person) {
            if (person.id in this.idMap) return;

            this.idMap[person.id] = person;
            this.list.push(person);
        }
    };

    angular.module('GroupExpenseTracker.services', [])
        .factory('personsService', function () {
            // TODO: Inject local storage support
            return new PersonsService();
        });

})();
