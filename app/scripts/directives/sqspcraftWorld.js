'use strict';

var renderer = new THREE.WebGLRenderer();

var w = 800;
var h = 600;
renderer.setSize(w, h);

var camera = new THREE.PerspectiveCamera(45, w/h, 0.1, 10000);

var scene = new THREE.Scene();
scene.add(camera);

camera.position.z = 300;

var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xCC0000 });
var cube = new THREE.Mesh(new THREE.CubeGeometry(50, 50, 50, 26, 26), cubeMaterial);
scene.add(cube);

var pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

scene.add(pointLight);

var rendering = false;

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
        scope.$watch('site', function() {
          if (scope.site && !rendering) {
            rendering = true;
            (function renderLoop(){
              requestAnimationFrame(renderLoop);
              cube.rotation.y += 0.005;
              cube.rotation.x += 0.009;
              renderer.render(scene, camera);
            })();
          }
        });
      }
    };
  });
