"use strict";

app.controller('SingleController',
    function($scope, resourceFactory, $routeParams, headerFactory) {
        headerFactory.setTitle("Maps");

        var promise = resourceFactory.get($routeParams.id);
        // TODO: update scope on load
        $scope.endpoint = {
            displayName: 'Maps',
            singular: 'map',
            plural: 'maps',
            href: 'https://apps.dhis2.org/demo/api/maps'
        };
        // TODO: remove spinner on load
});
