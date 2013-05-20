'use strict';

var renderer = new THREE.WebGLRenderer();

var w = 800;
var h = 600;
renderer.setSize(w, h);

var camera = new THREE.PerspectiveCamera(45, w/h, 0.1, 10000);

var scene = new THREE.Scene();
scene.add(camera);

camera.position.z = 300;


angular.module('hackdayVizApp')
  .directive('sqspcraftWorld', function () {
    return {
      template: '<div><p>SQSP world for: {{site}}</p></div>',
      restrict: 'E',
      scope: {
        site: '@site'
      },
      link: function postLink(scope, element, attrs) {
        element.find('div').append(renderer.domElement);
      }
    };
  });
