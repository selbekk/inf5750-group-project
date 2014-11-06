'use strict';

app.factory('resourceFactory', function ($http) {
    var factory = {};

    // Get all resources from api/resources.json
    factory.getAll = function () {
        return $http.get('/api/resources.json');
    }

    // Find the correct id
    factory.get = function (id) {
        return $http.get('/api/' + id + '.json');
    }

    return factory;
});
