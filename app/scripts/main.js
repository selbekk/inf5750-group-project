var app = angular.module('apiViewer', ['ngRoute']);

app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'RootController',
                templateUrl: 'views/frontpage.html'
            })
            .when('/browse', {
                controller: 'BrowseController',
                templateUrl:'views/browse.html'
            })
            .otherwise({redirectTo: '/'});
});

app.factory('groupMemberFactory', function() {

    var groupMembers = [
        'Kristofer',
        'Nugroho',
        'Sahar'
    ];

    var factory = {};
    factory.getAll = function() {
        return groupMembers;
    }

    return factory;
});

app.factory('endpointFactory', function() {
    var endpoints = [
        {
            url: '/api/resources',
            name: 'resources',
            description: 'An endpoint for resources'
        },
        {
            url: '/api/sectors',
            name: 'sectors',
            description: 'An endpoint for sectors'
        }
    ]

    var factory = {};
    factory.getAll = function() {
        return endpoints;
    }

    return factory;
});

app.controller('RootController', function($scope, groupMemberFactory) {
    $scope.appName = 'ANNK angular app';
    $scope.groupMembers = groupMemberFactory.getAll();
});
app.controller('BrowseController', function($scope, endpointFactory) {
    $scope.endpoints = endpointFactory.getAll();
})
