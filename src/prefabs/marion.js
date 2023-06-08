class Marion extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, textureUP, textureDOWN, textureLEFT, textureRIGHT) {
      super(scene, x, y, textureUP, textureDOWN, textureLEFT, textureRIGHT);
  
      // Add the sprite to the scene and enable physics
      scene.add.existing(this);
      scene.physics.add.existing(this);
      
      //set-up sound
      this.walkLeftSound = scene.sound.add('stepLeft', {loop: true});
      this.walkLeftSound.setRate(1.5);
      
      this.walkRightSound = scene.sound.add('stepRight', {loop : true});
      this.walkRightSound.setRate(1.5);
      
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

      this.cursors = scene.input.keyboard.addKeys('W,A,S,D');
      this.isWalkingLU = false;
      this.isWalkingRD = false;
      this.isWalking = false;
      //this.inventory = string({});
    }
    
    interact(script){
        this.talk(script);
    }

    addItem(item){
      this.inventory.add(item);
    }

    update() {
      // Reset velocity before handling input
      this.setVelocity(0);
  
      // Handle movement based on input
      if (this.cursors.W.isDown) {
        this.setVelocityY(-100);
        this.anims.play('up', true);
        this.isWalkingLU = true;

      } 
      else if (this.cursors.S.isDown) {
        this.setVelocityY(100);
        this.anims.play('down', true);
        this.isWalkingRD = true;

      }
  
      if (this.cursors.A.isDown) {
        this.setVelocityX(-100);
        this.anims.play('left', true);
        this.isWalkingLU = true;
      } 
      else if (this.cursors.D.isDown) {
        this.setVelocityX(100);
        this.anims.play('right', true);
        this.isWalkingRD = true;

      }
      // Check if walking sound is already playing before starting it again
      if (this.isWalkingLU) {
        if (!this.isWalking) {
          this.walkLeftSound.play();
          this.walkRightSound.stop();
          this.isWalking = true;
        }
        this.isWalkingRD = false;
      } else if (this.isWalkingRD) {
        if (!this.isWalking) {
          this.walkRightSound.play();
          this.walkLeftSound.stop();
          this.isWalking = true;
        }
        this.isWalkingLU = false;
      }

      // Idle animation if no movement keys are pressed
      if (!this.cursors.W.isDown && !this.cursors.S.isDown && !this.cursors.A.isDown && !this.cursors.D.isDown) {
        // Stop walking sound if playing
        if (this.isWalking) {
          this.walkLeftSound.stop();
          this.walkRightSound.stop();
          this.isWalking = false;
        }
      }
  }
}