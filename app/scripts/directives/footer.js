'use strict';

app.directive("appFooter", function() {
  return {
    restrict: 'E',
    templateUrl: 'views/footer.html',
    controller: 'FooterController'
  };
});