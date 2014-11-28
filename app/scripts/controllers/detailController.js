'use strict';

app.controller('DetailController', function ($scope, resourceFactory, $routeParams, headerFactory, $log) {
    var title = 'Explore: /' + $routeParams.endpoint + '/' + $routeParams.id ;
    headerFactory.setTitle(title);

    var url = $routeParams.endpoint + '/' + $routeParams.id ;

    resourceFactory.get(url).then(
        function (payload) {
                $scope.resource = angular.fromJson(payload.data);
                $scope.output = JSON.stringify(payload.data, undefined, 2);
                $scope.endpointId = $routeParams.endpoint + '/' + $scope.resource.displayName;
        },
        function (errorPayload) {
            $log.error('failure loading data', errorPayload);
            // TODO: Show the user some error message
            // TODO: Or redirect him to the list page and show an error there
        });


    $scope.previewNoun = 'Show';

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
        return jsonUrl.substring(jsonUrl.indexOf('/api') + 5, jsonUrl.length);
    };

    $scope.jsonify = function (resource) {
        return JSON.stringify(resource, undefined, 2);
    };

    $scope.isDateTime = function (text) {
        // DHIS date & time data type is ISO = YYYY-MM-DDTHH:MM:SS
        var tester = /^[0-9]+$/;
        if (text.length >= 10 && text.substr(4, 1) === '-' && text.substr(7, 1) === '-') {
            return  tester.test(text.substr(0, 4)) && tester.test(text.substr(5, 2));
        }
        else {
            return false;
        }
    };

    $scope.isChart = function (href) {
        return href && href.search('charts') > -1;
    };

    $scope.isMap = function (href) {
        return href && href.search('maps') > -1;
    };

    $scope.isReport = function (href) {
        return href && href.search('reports') > -1;
    };

    $scope.isMapViews = function (href) {
        return href && href.search('mapViews') > -1;
    };

    $scope.isPreview = function (href) {
        return href && (
            $scope.isChart(href) ||
            $scope.isMap(href) ||
            $scope.isReport(href) ||
            $scope.isMapViews(href)
        );
    };

    $scope.togglePreview = function () {
        $scope.showPreview = !$scope.showPreview;
        $scope.previewNoun = $scope.showPreview ? 'Hide' : 'Show';
    };

});
