'use strict';
app.controller('loadingController', ['$scope',function ($scope) {
	$scope.$on('LOAD',function(){$scope.loading=true});
	$scope.$on('UNLOAD',function(){$scope.loading=false});
}])