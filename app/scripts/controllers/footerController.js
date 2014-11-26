'use strict';

app.controller('FooterController', function ($scope, footerFactory) {
    $scope.footer = footerFactory.footer();
    $scope.isVisible = footerFactory.isVisible();
});