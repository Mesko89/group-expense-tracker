angular.module('expensesToHtml', [])

    .filter('expensesToHtml', function ($filter) {
        return function (expenses, template, filler) {
            filler = filler || ', ';
            return expenses.map(function(expense) {
                return template
                    .replace('{{personName}}', expense.personName)
                    .replace('{{value}}', $filter('currency')(expense.value));
            }).join(filler);
        };
    });