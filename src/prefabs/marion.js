class Marion extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, textureUP, textureDOWN, textureLEFT, textureRIGHT) {
      super(scene, x, y, texture);
  
      // Add the sprite to the scene and enable physics
      scene.add.existing(this);
      scene.physics.add.existing(this);
  
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
      //colors light- #1abef8 dark - #18acc0
      // Set the default animation
      //this.anims.play('down');
    }
  
    update(cursors) {
      // Reset velocity before handling input
      this.setVelocity(0);
  
      // Handle movement based on input
      if (cursors.up.isDown) {
        this.setVelocityY(-100);
        this.anims.play('up', true);
      } else if (cursors.down.isDown) {
        this.setVelocityY(100);
        this.anims.play('down', true);
      }
  
      if (cursors.left.isDown) {
        this.setVelocityX(-100);
        this.anims.play('left', true);
      } else if (cursors.right.isDown) {
        this.setVelocityX(100);
        this.anims.play('right', true);
      }
  
      // Idle animation if no movement keys are pressed
      if (!cursors.up.isDown && !cursors.down.isDown && !cursors.left.isDown && !cursors.right.isDown) {
        this.anims.stop();
      }
    }
  }