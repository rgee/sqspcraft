'use strict';

describe('Controller: SiteCtrl', function () {

  // load the controller's module
  beforeEach(module('hackdayVizApp'));

  var SiteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SiteCtrl = $controller('SiteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
