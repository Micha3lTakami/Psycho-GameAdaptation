class Bates_Interior extends Phaser.Scene {
    constructor() {
        super('batesInteriorScene');

    } 
    // create()
    // create play scene
    create() {
        this.cameras.main.fadeIn(1000);        
        
        if(!normanTalk){
            // Create bates music
            this.gameMusic = this.sound.add('rainCar', { loop: true });
            this.gameMusic.play();
            this.gameMusic.setVolume(0); 

            // tween for game music fade in
            this.tweens.add({
            targets: this.gameMusic,
            volume: 0.3,
            duration: 3000,
            ease: 'Linear',
            });
        }

        const map = this.add.tilemap('bates_interiorJSON');
        const intro_set2 = map.addTilesetImage('interior', 'tilesetImage2');
        
        const baseLayer = map.createLayer('Tile Layer 1', intro_set2, 0, 0);
        const buildingLayer = map.createLayer('decorations', intro_set2, 0, 0);



        const marionSpawn = map.findObject('spawn', obj => obj.name === 'marion_spawn');
        const NormanSpawn = map.findObject('spawn', obj => obj.name === 'norman_spawn');
        const buildExit = map.findObject('spawn', obj => obj.name === 'door');

        
        this.mainChar = new Marion(this, marionSpawn.x, marionSpawn.y, 'MarionUp', 'MarionDown', 'MarionLeft', 'MarionRight');
        this.mainChar.setScale(2);
        


        // Get the frame by index from the sprite sheet animation
        this.norman = new Norman(this, NormanSpawn.x, NormanSpawn.y, this.mainChar, false, 'NormanWalk', 'NormanIdle', 'NormanAttack');
        this.norman.setScale(2);
        
        if(normanTalk == true){
            this.StartRoomDoor = new Door(this, buildExit.x, buildExit.y, 'door', 'bates_exteriorScene');
            this.StartRoomDoor.setScale(1.5);
        }
        
        // enable collision based on the property created in Tiled
        buildingLayer.setCollisionByProperty({no_walk:true});
        baseLayer.setCollisionByProperty({no_walk:true});


  
        this.physics.add.collider(this.mainChar, buildingLayer)
        this.physics.add.collider(this.mainChar, baseLayer)
        this.physics.add.collider(this.mainChar, this.norman, () =>{
            if(normanTalk == false){
                normanTalk = true;
                this.scene.bringToTop('normanIntroScene');
                this.scene.launch('normanIntroScene');
                this.mainChar.canWalk = false;
                this.time.delayedCall(25000, () => {
                    this.mainChar.canWalk = true;
                    this.gameMusic.pause();
                    this.scene.stop();
                }, [], this);
            }

        });
 

        // cameras
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
        this.cameras.main.startFollow(this.mainChar, true, 0.25, 0.25)
        this.physics.world.bounds.setTo(0,0, map.widthInPixels, map.heightInPixels)
    }
    update(){
        this.mainChar.update();
    }
}
