'use strict';

angular.module('hackdayVizApp')
  .factory('siteScraper', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
