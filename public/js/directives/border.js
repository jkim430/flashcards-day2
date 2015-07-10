app.directive('borderOnHover', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attibutes) {
      element.on('mouseenter', function() {
        element.addClass('border-hover');
      })
      element.on('mouseleave', function() {
        element.removeClass('border-hover');
      })
    }
  }
})