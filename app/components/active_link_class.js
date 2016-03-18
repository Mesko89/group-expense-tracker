angular.module('activeLinkClass', []).
directive('activeLinkClass', ['$location', function (location) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var clazz = attrs.activeLinkClass;
            var path = element.find('a').attr('href').substring(1);
            scope.location = location;
            scope.$watch('location.path()', function (newPath) {
                if (path === newPath) {
                    element.addClass(clazz);
                } else {
                    element.removeClass(clazz);
                }
            });
        }
    };
}]);