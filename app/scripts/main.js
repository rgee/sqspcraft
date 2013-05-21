var createGame = require('voxel-engine');

var game = createGame({
  texturePath: '/textures/'
});

var container = $('.container').get(0);
game.appendTo(container);
game.setupPointerLock(container);