(function () {
  $(document).ready(function () {
    var launcher = $('#launcher');

    launcher.on('hidden', function () {
      var createGame = require('voxel-engine');

      var game = createGame({
        texturePath: '/textures/'
      });

      var container = $('.world-container').get(0);
      game.appendTo(container);
      game.setupPointerLock(container);
    });
  });
})();