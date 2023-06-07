class Norman extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, textureUP, textureDOWN, textureLEFT, textureRIGHT) {
      super(scene, x, y, textureUP, textureDOWN, textureLEFT, textureRIGHT);
  
      // Add the sprite to the scene and enable physics
      scene.add.existing(this);
      scene.physics.add.existing(this);
     /*
           // Set up animations
           this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers(textureUP, { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
          });
      
          this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers(textureDOWN, { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
          });
      
          this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers(textureRIGHT, { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
          });
      
          this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers(textureLEFT, { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
          });
          */
    }
}