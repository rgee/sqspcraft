'use strict';

angular.module('hackdayVizApp')
  .controller('SiteCtrl', function ($scope, siteScraper) {
    $scope.siteNameInput = null;
    $scope.siteName = null;
    $scope.showSite = function() {
      if (this.siteNameInput) {
        this.siteName = this.siteNameInput;
        this.siteNameInput = '';
      }
    };

    $scope.$watch('siteName', function() {
      if ($scope.siteName) {
        siteScraper.getSiteData(this.siteName, function(data) {
          $scope.siteData = data;
          $scope.$apply();
        }, this);
      }
    });
  });
