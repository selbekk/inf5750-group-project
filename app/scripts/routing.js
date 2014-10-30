app.config(function($routeProvider) {
        $routeProvider
            .when('/list', {
                controller: 'ListController',
                templateUrl: 'views/list.html'
            })
            .when('/single/:id', {
                controller: 'SingleController',
                templateUrl:'views/single.html'
            })
            .otherwise({redirectTo: '/list'});
            
});
