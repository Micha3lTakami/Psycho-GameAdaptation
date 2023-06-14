class Norman extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, follow, track, textureWalk, textureIdle, textureAttack) {
      super(scene, x, y, follow, track, textureWalk, textureIdle, textureAttack);
      this.follow = follow;
      // Add the sprite to the scene and enable physics
      scene.add.existing(this);
      scene.physics.add.existing(this);
      this.body.setImmovable(true);
      this.setOrigin(.125);
      this.setSize(16,16);
      //set-up sound
      this.walkLeftSound = scene.sound.add('stepLeft', {loop: true});
      this.walkLeftSound.setRate(1.5);
      
      this.walkRightSound = scene.sound.add('stepRight', {loop : true});
      this.walkRightSound.setRate(1.5);
     
      // Set up animations
      this.anims.create({
        key: 'up',
        frames: this.anims.generateFrameNumbers(textureWalk, { start: 4, end: 7 }),
        frameRate: 10,
        repeat: -1
      });
      
      this.anims.create({
        key: 'down',
        frames: this.anims.generateFrameNumbers(textureWalk, { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
      });
      
      this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers(textureWalk, { start: 8, end: 11 }),
        frameRate: 10,
        repeat: -1
      });
      
      this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers(textureWalk, { start: 12, end: 15 }),
        frameRate: 10,
        repeat: -1
      });

      this.anims.create({
        key: 'idler',
        frames: this.anims.generateFrameNumbers(textureIdle, { start: 4, end: 5 }),
        frameRate: 10,
        repeat: -1
      })


      this.anims.create({
        key: 'atatckright',
        frames: this.anims.generateFrameNumbers(textureAttack, { start: 8, end: 11 }),
        frameRate: 10,
        repeat: -1
      })

      this.isWalkingLU = false;
      this.isWalkingRD = false;
      this.isWalking = false;
      this.anims.play('idler', true);
    }
    update(){
      // Reset velocity before handling movement
      this.setVelocity(0);
      
      if(track == true){
        // Calculate the direction to the follow sprite
        const dx = this.follow.x - this.x;
        const dy = this.follow.y - this.y;

        // Handle movement based on the direction to the follow sprite
        if (Math.abs(dx) > Math.abs(dy)) {
          if (dx < 0) {
            this.setVelocityX(-100);
            this.anims.play('left', true);
            this.isWalkingLU = true;
          } 
          else {
            this.setVelocityX(100);
            this.anims.play('right', true);
            this.isWalkingRD = true;
          }
        } 
        else {
          if (dy < 0) {
            this.setVelocityY(-100);
            this.anims.play('up', true);
            this.isWalkingLU = true;
          } else {
            this.setVelocityY(100);
            this.anims.play('down', true);
            this.isWalkingRD = true;
          }
        }

        // Handle the walking sound based on movement
        if (this.isWalkingLU) {
          if (!this.isWalking) {
            this.walkLeftSound.play();
            this.walkRightSound.stop();
            this.isWalking = true;
          }
          this.isWalkingRD = false;
        } 
        else if (this.isWalkingRD) {
          if (!this.isWalking) {
            this.walkRightSound.play();
            this.walkLeftSound.stop();
            this.isWalking = true;
          }
          this.isWalkingLU = false;
        }
      }
      // Idle animation if no movement is happening
      if (this.body.velocity.equals(0)) {
        this.anims.play('idleright', true);
        if (this.isWalking) {
          this.walkLeftSound.stop();
          this.walkRightSound.stop();
          this.isWalking = false;
        }
      }
      
    }
}