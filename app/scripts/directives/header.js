'use strict';

app.directive('appHeader', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/header.html',
        controller: 'HeaderController'
    };
});
