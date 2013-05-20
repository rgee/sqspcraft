'use strict';

angular.module('hackdayVizApp')
  .controller('SiteCtrl', function ($scope) {
    $scope.siteNameInput = null;
    $scope.siteName = null;
    $scope.showSite = function() {
      if (this.siteNameInput) {
        this.siteName = this.siteNameInput;
        this.siteNameInput = '';
      }
    };
  });
