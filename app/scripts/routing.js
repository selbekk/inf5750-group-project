'use strict';

app.config(function ($routeProvider) {
    $routeProvider
        .when('/list', {
            controller: 'ListController',
            templateUrl: 'views/list.html'
        })
        .when('/single/:endpoint', {
            controller: 'SingleController',
            templateUrl: 'views/single.html'
        })
        .when('/single/:endpoint/:id', {
            controller: 'SingleController',
            templateUrl: 'views/single.html'
        })
        .otherwise({redirectTo: '/list'});

});
