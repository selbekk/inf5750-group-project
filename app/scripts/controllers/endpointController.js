'use strict';

app.controller('EndpointController', function ($scope, resourceFactory, $routeParams, headerFactory, $log) {
    var title = 'Explore: /' + $routeParams.endpoint + ($routeParams.id ? "/" + $routeParams.id : "");
    headerFactory.setTitle(title);

    var url = $routeParams.endpoint + ($routeParams.id ? "/" + $routeParams.id : "");

    resourceFactory.get(url).then(
        function (payload) {
                $scope.resources = payload.data[$routeParams.endpoint];
                $scope.output = JSON.stringify(payload.data[$routeParams.endpoint], undefined, 2);
                $scope.endpointId = $routeParams.endpoint;
        },
        function (errorPayload) {
            $log.error('failure loading data', errorPayload);
            // TODO: Show the user some error message
            // TODO: Or redirect him to the list page and show an error there
        });

});
