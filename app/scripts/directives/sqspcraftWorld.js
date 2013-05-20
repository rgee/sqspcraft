'use strict';

angular.module('hackdayVizApp')
  .directive('sqspcraftWorld', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      scope: {
        site: '@site'
      },
      link: function postLink(scope, element, attrs) {
        scope.$watch('site', function() {
          element.text('SQSP world for: ' + scope.site);
        });
      }
    };
  });
