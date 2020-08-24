var config = {
  type: Phaser.AUTO,
  scale: { autoCenter: Phaser.Scale.CENTER_BOTH, width: 832, height: 800 },

  physics: { default: "arcade", arcade: { gravity: { y: 0 }, debug: true } },
  scene: [level,level_2],
};

var game = new Phaser.Game(config);
var paleta;
var pelota;
var ladrillo;
var cursores;
