'use strict';

app.config(function ($routeProvider) {
    $routeProvider
        .when('/list', {
            controller: 'ListController',
            templateUrl: 'views/list.html'
        })
        .when('/:endpoint', {
            controller: 'SingleController',
            templateUrl: 'views/endpoint.html'
        })
        .when('/:endpoint/:id', {
            controller: 'SingleController',
            templateUrl: 'views/endpoint.html'
        })
        .otherwise({redirectTo: '/list'});

});
