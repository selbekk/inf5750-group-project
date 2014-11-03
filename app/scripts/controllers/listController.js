app.controller('ListController', function($scope, resourceFactory, $http) {
    var promise = resourceFactory.getAll();

    // TODO: update scope on load
	promise.then(
	  function(payload) { 
	      $scope.endpoints = payload.data.resources;
	  },
	  function(errorPayload) {
	      $log.error('failure loading data', errorPayload);
	  });

    // TODO: remove spinner on load

    // TODO: listen to selection of endpoint
        // TODO: Route to single/:id
});