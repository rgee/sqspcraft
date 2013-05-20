'use strict';

describe('Service: siteScraper', function () {

  // load the service's module
  beforeEach(module('hackdayVizApp'));

  // instantiate service
  var siteScraper;
  beforeEach(inject(function (_siteScraper_) {
    siteScraper = _siteScraper_;
  }));

  it('should do something', function () {
    expect(!!siteScraper).toBe(true);
  });

});
