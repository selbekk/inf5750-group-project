"use strict";

app.controller('HeaderController', function($scope, headerFactory) {
    $scope.header = headerFactory;
});
