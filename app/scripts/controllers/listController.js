app.controller('ListController', function($scope, resourceFactory, headerFactory) {
    headerFactory.setTitle('List of API endpoints');

    var promise = resourceFactory.getAll();

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
});
