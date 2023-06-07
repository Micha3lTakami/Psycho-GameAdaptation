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
          if(!this.isWalkingLU){
            this.walkLeftSound.play();
            this.walkRightSound.stop();
            this.isWalkingLU = true;
            this.isWalkingRU = false;
          }
      } 
      else if (this.cursors.S.isDown) {
        this.setVelocityY(100);
        this.anims.play('down', true);
        if(!this.isWalkingRD){
          this.walkRightSound.play();
          this.walkLeftSound.stop();
          this.isWalkingRD = true;
          this.isWalkingLU = false;
        }
      }
  
      if (this.cursors.A.isDown) {
        this.setVelocityX(-100);
        this.anims.play('left', true);
        if(!this.isWalkingLU){
          this.walkLeftSound.play();
          this.walkRightSound.stop();
          this.isWalkingLU = true;
          this.isWalkingRU = false;
        }
      } 
      else if (this.cursors.D.isDown) {
        this.setVelocityX(100);
        this.anims.play('right', true);
        if(!this.isWalkingRD){
          this.walkRightSound.play();
          this.walkLeftSound.stop();
          this.isWalkingRD = true;
          this.isWalkingLU = false;
        }
      }

      // Idle animation if no movement keys are pressed
      if (!this.cursors.W.isDown && !this.cursors.S.isDown && !this.cursors.A.isDown && !this.cursors.D.isDown) {

        this.isWalkingLeft = false;
        this.isWalkingRight = false;
        this.anims.stop();
        this.walkLeftSound.stop();
        this.walkRightSound.stop();
      }
    }
  }