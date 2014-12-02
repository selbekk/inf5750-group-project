'use strict';

app.directive('property', function() {
    return {
        restrict: 'E',
        templateUrl: 'views/property.html',
        controller: 'PropertyController'
    }
});
