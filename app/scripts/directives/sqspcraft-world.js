'use strict';

angular.module('hackdayVizApp')
  .directive('sqspcraftWorld', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the sqspcraftWorld directive');
      }
    };
  });
