'use strict';

angular.module('hackdayVizApp')
  .factory('siteScraper', function () {
    // Public API here
    return {
      getSiteData: function(identifier, callback, ctx) {
        window.setTimeout(function() {
          callback.call(ctx, {
            pages: []
          });
        }, 1000);
      }
    };
  });
