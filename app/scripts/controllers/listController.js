app.controller('ListController', function($scope, resourceFactory) {
    $scope.helloWorld = 'hello world from controller';
    var promise = resourceFactory.getAll();
    // TODO: update scope on load
    // TODO: remove spinner on load
    $scope.endpoints = [
        {
            displayName: 'Maps',
            singular: 'map',
            plural: 'maps',
            href: 'https://apps.dhis2.org/demo/api/maps'
        },
        {
            displayName: 'Category Options',
            singular: 'categoryOption',
            plural: 'categoryOptions',
            href: 'https://apps.dhis2.org/demo/api/categoryOptions'
        }
    ];
    // TODO: listen to selection of endpoint
        // TODO: Route to single/:id
});
