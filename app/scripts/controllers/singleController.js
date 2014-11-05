app.controller('SingleController', function($scope, resourceFactory, $routeParams) {
    if ( $routeParams.id ) 
      var promise = resourceFactory.get($routeParams.endpoint + '/' + $routeParams.id);
    else
      var promise = resourceFactory.get($routeParams.endpoint);
    
    // TODO: update scope on load
	promise.then(
	  function(payload) { 
	          if ( $routeParams.id ) {
		      $scope.endpoints = angular.fromJson(payload.data);
		      $scope.endpointId = $routeParams.endpoint + '/' + $scope.endpoints.displayName;
		  }
	          else {	            
		      $scope.endpoints = eval('payload.data.' + $routeParams.endpoint);
		      $scope.endpointId = $routeParams.endpoint;
		  }
	  },
	  function(errorPayload) {
	      $log.error('failure loading data', errorPayload);
	  });

    // TODO: remove spinner on load

    $scope.isString = function(text){
        return angular.isString(text);
    };

    $scope.isArray = function(text){
        return angular.isArray(text);
    };

    $scope.isObject = function(text){
        return angular.isObject(text);
    };

    $scope.setUrl = function(jsonUrl){
        return  jsonUrl.substring(jsonUrl.indexOf('/api') + 5, jsonUrl.length);
    };


});
