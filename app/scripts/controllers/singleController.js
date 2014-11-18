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

    $scope.isDateTime = function(text){
    // DHIS date & time data type is ISO = YYYY-MM-DDTHH:MM:SS
	var tester = /^[0-9]+$/;
	if ( text.length >= 10 && text.substr(4,1) == "-" && text.substr(7,1) == "-" ) 
		return  tester.test(text.substr(0,4)) && tester.test(text.substr(5,2)) ;
        else return false;
    };

    $scope.isChart = function (text) {
        return text.search("charts") >= 0;
    };

    $scope.isMap = function (text) {
        return text.search("maps") >= 0 ;
    };

    $scope.isReport = function (text) {
        return text.search("reports") >= 0;
    };

    $scope.isMapViews = function (text) {
        return text.search("mapViews") >= 0 ;
    };
});
