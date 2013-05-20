'use strict';

angular.module('hackdayVizApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/site', {
        templateUrl: 'views/site.html',
        controller: 'SiteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
