class Door extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, sceneKey) {
      super(scene, x, y, texture);
      this.sceneKey = sceneKey;
  
      // Add the door to the physics system
      scene.physics.world.enable(this);
      scene.add.existing(this);
  
      // Set properties for collision
      this.setCollideWorldBounds(true);
      this.body.immovable = true;
  
      // Create a collider with the mainChar sprite
      scene.physics.add.collider(this, scene.mainChar, () => {
        scene.scene.start(this.sceneKey);
      });
    }
  }