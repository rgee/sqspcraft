'use strict';

describe('Directive: sqspcraftWorld', function () {
  beforeEach(module('hackdayVizApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<sqspcraft-world></sqspcraft-world>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the sqspcraftWorld directive');
  }));
});
