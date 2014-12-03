'use strict';

app.factory('resourceFactory', function ($http, $scope) {
    var factory = {};

    // Get all resources from api/resources.json
    factory.getAll = function () {
        return $http.get('/api/resources.json?paging=false');
    };

    // Find the correct id
    factory.get = function (id) {
        return $http.get('/api/' + id + '.json?paging=false');
    };

    return factory;
});
