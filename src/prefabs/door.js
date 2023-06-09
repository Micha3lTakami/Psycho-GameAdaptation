class Door extends Phaser.Physics.Arcade.Sprite {
  constructor(curScene, x, y, texture, sceneKey) {
    super(curScene, x, y, texture);
    this.sceneKey = sceneKey;
    // Add the door to the physics system
    curScene.physics.world.enable(this);
    curScene.add.existing(this);

    // Set properties for collision
    this.setCollideWorldBounds(true);
    this.body.immovable = true;

    // Create a collider with the mainChar sprite
    curScene.physics.add.collider(this, curScene.mainChar, () => {
      curScene.sound.stopAll();
      curScene.cameras.main.fadeOut(1000, 10, 20, 30);
      console.log("made it here 1");
      console.log(this.sceneKey);
      if (this.sceneKey === 'introScene') {
        curScene.time.delayedCall(1100, () => {
          // Restyle border for next scene
          let canvas = document.querySelector('canvas');
          canvas.style.border = '10px #ADD8E6 inset';
          curScene.scene.start('introScene');
        });
      }
      else if (this.sceneKey === 'menuScene') {
        curScene.time.delayedCall(1100, () => {
          // Restyle border for next scene
          let canvas = document.querySelector('canvas');
          canvas.style.border = '10px #ADD8E6 inset';
          console.log("made it here 2");
          curScene.scene.start('menuScene');
        });
      }
      else if (this.sceneKey === 'officeScene') {
        curScene.time.delayedCall(1100, () => {
          // Restyle border for next scene
          let canvas = document.querySelector('canvas');
          canvas.style.border = '10px #ADD8E6 inset';
          console.log("made it here 3");
          curScene.scene.start('officeScene');
        });
      }
      else if (this.sceneKey === 'startRoomScene') {
        curScene.time.delayedCall(1100, () => {
          // Restyle border for next scene
          let canvas = document.querySelector('canvas');
          canvas.style.border = '10px #ADD8E6 inset';
          console.log("made it here 3");
          curScene.scene.start('startRoomScene');
        });
      }
      else if (this.sceneKey === 'bates_InteriorScene') {
        curScene.time.delayedCall(1100, () => {
          // Restyle border for next scene
          let canvas = document.querySelector('canvas');
          canvas.style.border = '10px #ADD8E6 inset';
          console.log("made it here 3");
          curScene.scene.start('batesInteriorScene');
        });
      }
      else if (this.sceneKey === 'motherScene') {
        curScene.time.delayedCall(1100, () => {
          // Restyle border for next scene
          let canvas = document.querySelector('canvas');
          canvas.style.border = '10px #ADD8E6 inset';
          console.log("made it here 3");
          curScene.scene.start('motherScene');
        });
      }
      else if (this.sceneKey === 'bates_exteriorScene') {
        curScene.time.delayedCall(1100, () => {
          // Restyle border for next scene
          let canvas = document.querySelector('canvas');
          canvas.style.border = '10px #ADD8E6 inset';
          console.log("made it here 3");
          curScene.scene.start('bates_exteriorScene');
        });
      }
    });
  }
}