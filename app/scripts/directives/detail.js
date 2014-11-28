app.directive('collection', function() {
  return {
	restrict: "E",
	replace: true,
	scope: {
		collection: "=",
	},
	template: "<member ng-repeat='(key, val) in collection' key='key' val='val'></member>"
  } 
});

app.directive('member', function($compile) {
  return {
	restrict: "E",
	replace: true,
	scope: {
		key: "=",
		val: "=",
	},
	link: function (scope, element, attrs) {
		if (angular.isDefined(scope.val)) {
			if (angular.isArray(scope.val) || angular.isObject(scope.val)) {
				element.append("<div class='property'><li><h3>{{key}}:</h3></li></div>"); 
				element.append("<div class='property'><ul> <collection collection='val'></collection></ul></div>"); 
			}
			else if (scope.key == "href") {
				scope.url = scope.val.substring(scope.val.indexOf('/api') + 5, scope.val.length);
				element.append("<div class='property'><li><strong>{{key}}:</strong> <a href='#/{{url}}'>{{ val }}</a></li></div>"); 
			}
			else if (scope.val.length >= 10 && scope.val.substr(4, 1) == '-' && scope.val.substr(7, 1) == '-') {
				element.append("<div class='property'><li><strong>{{key}}:</strong> {{ val.substr(0,10) }} {{ val.substr(11,8) }} </li></div>"); 
			}
			else {
				element.append("<div class='property'><li><strong>{{key}}:</strong> {{val}} </li></div>"); 
			}
			$compile(element.contents())(scope);
		}
	}
  } 
});