angular.module('amountsToHtml', [])

    .filter('amountsToHtml', function ($filter) {
        return function (amounts, template, filler) {
            filler = filler || ', ';
            return amounts.map(function(amount) {
                if (!amount.value) return null;
                return template
                    .replace('{{personName}}', amount.personName)
                    .replace('{{value}}', $filter('currency')(amount.value));
            }).filter(function(value) {
                return value !== null;
            }).join(filler);
        };
    });