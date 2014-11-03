app.factory('resourceFactory', function($http) {
    var factory = {};

    // Get all resources from api/resources.json
    factory.getAll = function() {
	return $http.get('/demo/api/resources.json');
    }

    // Find the correct id
    factory.get = function(id) {
	return $http.get('/demo/api/' + id + '.json');
    }

    return factory;
});
