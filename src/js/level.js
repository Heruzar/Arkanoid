class level extends Phaser.Scene {
  constructor() {
    super("level");
  }
  preload() {
    console.log("preload");
    this.load.image("fondo", "../src/assets/Fondo.jpg");
    this.load.atlas(
      "atlas",
      "../src/assets/atlas-a-01.png",
      "../src/assets/atlas-a-01_atlas.json"
    );
    this.load.image("ladrillosPNG", "../src/assets/ladrillos.png");
    this.load.image("botonPNG", "../src/assets/boton.png");
    this.load.tilemapTiledJSON("nivel1", "../src/assets/nivel1.json");
  }
  create() {
    console.log("create");

    this.add.image(0, 400, "fondo", "../src/assets/Fondo.jpg");

    paleta = this.physics.add.image(416, 700, "atlas", "paddlered");
    paleta.body.immovable = true;

    pelota = this.physics.add.image(416, 660, "atlas", "ballgrey");

    var mapa = this.make.tilemap({ key: "nivel1" });
    ladrillo = mapa.addTilesetImage("ladrillos", "ladrillosPNG");

    var topLayer = mapa.createDynamicLayer("top", ladrillo);
    topLayer.setCollisionByProperty({ collides: true });
    
    this.physics.add.overlap(pelota, topLayer)
    this.physics.add.collider(pelota, paleta);
    this.physics.add.collider(topLayer, pelota);

    pelota.setBounce(1);
    pelota.setVelocityY(700);
    pelota.setVelocityX(-100);
    pelota.setCollideWorldBounds(true);
    paleta.setCollideWorldBounds(true);

    var boton = this.add.image(800, 770, "botonPNG",)
    .setInteractive({cursor: "pointer"});
   
  

    cursores = this.input.keyboard.createCursorKeys();
    
    boton.on("pointerdown", () => {
        this.scene.sleep("level")
        this.scene.run("level_2")
    })
  }
   
  update() {
    if (cursores.left.isDown) {
      paleta.setVelocityX(-450);
    } else if (cursores.right.isDown) {
      paleta.setVelocityX(450);
    } else {
      paleta.setVelocityX(0);
    }
  }
  //hacer una funcion de hit layer, mirate la clase del 1 desptiembre para saber.
}
