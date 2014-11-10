'use strict';

app.controller('SingleController', function ($scope, resourceFactory, $routeParams, headerFactory, $log) {
    var title = 'Explore: /' + $routeParams.endpoint + ($routeParams.id ? "/" + $routeParams.id : "");
    headerFactory.setTitle(title);

    var url = $routeParams.endpoint + ($routeParams.id ? "/" + $routeParams.id : "");

    resourceFactory.get(url).then(
        function (payload) {
            if ($routeParams.id) {
                $scope.resource = angular.fromJson(payload.data);
                $scope.output = JSON.stringify(payload.data, undefined, 2);
                $scope.endpointId = $routeParams.endpoint + '/' + $scope.endpoints.displayName;

            }
            else {
                $scope.resources = payload.data[$routeParams.endpoint];
                $scope.output = JSON.stringify(payload.data[$routeParams.endpoint], undefined, 2);
                $scope.endpointId = $routeParams.endpoint;
            }
        },
        function (errorPayload) {
            $log.error('failure loading data', errorPayload);
            // TODO: Show the user some error message
            // TODO: Or redirect him to the list page and show an error there
        });

    $scope.isString = function (text) {
        return angular.isString(text);
    };

    $scope.isArray = function (text) {
        return angular.isArray(text);
    };

    $scope.isObject = function (text) {
        return angular.isObject(text);
    };

    $scope.setUrl = function (jsonUrl) {
        return  jsonUrl.substring(jsonUrl.indexOf('/api') + 5, jsonUrl.length);
    };

    $scope.jsonify = function(resource) {
        return JSON.stringify(resource, undefined, 2);
    };
});
