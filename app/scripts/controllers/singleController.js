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
		      $scope.endpointId = $routeParams.id;
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

/* 
    $scope.keyValuePair = function(endpoints) {
        angular.forEach(endpoints, function(value , key) {
           document.write("<li>"+ key + ":" + value +"</li>");
           angular.forEach(value, function(value2 , key2) {
                 document.write("<li>"+ key2 + ":" + value2 +"</li>");
                 angular.forEach(value2, function(value3 , key3) {
                     document.write("<li>"+ key3 + ":" + value3 +"</li>");
             })
           })
        })
    }
*/

});
