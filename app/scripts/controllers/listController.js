'use strict';

app.controller('ListController', function ($scope, resourceFactory, headerFactory, $http, $log) {
    headerFactory.setTitle('List of API endpoints');

    var promise = resourceFactory.getAll();

    promise.then(
        function (payload) {
            $scope.endpoints = payload.data.resources;
        },
        function (errorPayload) {
            $log.error('failure loading data', errorPayload);
        });
});
