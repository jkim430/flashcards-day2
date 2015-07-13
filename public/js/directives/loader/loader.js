app.directive('loader', function() {
  return {
    restrict: 'E',
    //doesnt inherit any scope properties
    scope: true,
    templateUrl: 'js/directives/loader/loader.html'
  }
})