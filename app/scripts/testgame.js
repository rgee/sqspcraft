var createGame = require('voxel-engine')
var texturePath = require('painterly-textures')(__dirname);

function sphereWorld(x, y, z) {
  // return the index of the material you want to show up
  // 0 is air
  if (x*x + y*y + z*z > 15*15) return 0
  return 3  
}

var game = createGame({
  generate: sphereWorld,
  texturePath: texturePath,
  startingPosition: [0, 1000, 0], // x, y, z
  materials: [['grass', 'dirt', 'grass_dirt'], 'brick', 'dirt', 'obsidian', 'bedrock']
});
var container = document.body;
game.appendTo(container);
game.setupPointerLock(container);