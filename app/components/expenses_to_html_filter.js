angular.module('expensesToHtml', [])

    .filter('expensesToHtml', function ($filter) {
        return function (expenses, template, filler) {
            filler = filler || ', ';
            return expenses.map(function(expense) {
                if (!expense.value) return null;
                return template
                    .replace('{{personName}}', expense.personName)
                    .replace('{{value}}', $filter('currency')(expense.value));
            }).filter(function(value) {
                return value !== null;
            }).join(filler);
        };
    });