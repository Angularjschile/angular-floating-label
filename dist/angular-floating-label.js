
/*!
 * angular-floating-label - Angular directive for floating-label
 * v0.1.0
 * 
 * copyright First + Third 2013
 * MIT License
*/
(function() {
  angular.module('floatingLabel', [])
    .directive('floatingLabel', ['$parse', function($parse) {
      return {
        restrict: 'EA',
        scope: {
          options: '&floatingLabel'
        },
        link: function(scope, el, args) {
          var options = scope.options();
          el.floatingLabel(options);
        }
      };
    }]);
}());