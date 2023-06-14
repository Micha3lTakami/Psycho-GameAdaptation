class Office extends Phaser.Scene {
    constructor() {
        super('officeScene');

    } 
    // create()
    // create play scene
    create() {
                        
        // B&W STUFF
        /*
        // Create the desaturate pipeline
        const pipeline = this.game.renderer.addPipeline('Desaturate', new DesaturatePipeline(this.game));

        // Apply the pipeline to the entire scene
        this.cameras.main.setRenderToTexture(pipeline);*/

        this.cameras.main.fadeIn(1000);
        
        // Create intro music
        this.gameMusic = this.sound.add('introMusic', { loop: true });
        this.gameMusic.play();
        this.gameMusic.setVolume(0); // Set initial volume to 0

        // tween for game music fade in
        this.tweens.add({
        targets: this.gameMusic,
        volume: 0.4,
        duration: 2000,
        ease: 'Linear',
        });

        const map = this.add.tilemap('officeJSON');
        const intro_set2 = map.addTilesetImage('interior', 'tilesetImage2');
        
        const baseLayer = map.createLayer('Tile Layer 1', intro_set2, 0, 0);
        const buildingLayer = map.createLayer('decorations', intro_set2, 0, 0);
        const bossLayer = map.createLayer('boss', intro_set2, 0, 0);

        const marionSpawn = map.findObject('spawn', obj => obj.name === 'marion_spawn');
        const buildExit = map.findObject('spawn', obj => obj.name === 'door');

        
        this.mainChar = new Marion(this, marionSpawn.x, marionSpawn.y, 'MarionUp', 'MarionDown', 'MarionLeft', 'MarionRight');
        this.mainChar.setScale(2);
        this.OfficeRoomDoor = new Door(this, buildExit.x, buildExit.y, 'door', 'introScene');
        this.OfficeRoomDoor.setScale(1.5);
        
        // enable collision based on the property created in Tiled
        buildingLayer.setCollisionByProperty({no_walk:true});
        bossLayer.setCollisionByProperty({no_walk:true});
        baseLayer.setCollisionByProperty({no_walk:true});

  
        this.physics.add.collider(this.mainChar, buildingLayer)
        this.physics.add.collider(this.mainChar, bossLayer, () =>{
            if(money == false){
                money = true;
                this.scene.bringToTop('bossTalkingScene');
                this.scene.launch('bossTalkingScene');
                this.mainChar.canWalk = false;
                this.time.delayedCall(8000, () => {
                    this.mainChar.canWalk = true;
                }, [], this);

            }
        })
        this.physics.add.collider(this.mainChar, baseLayer)

        // cameras
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
        this.cameras.main.startFollow(this.mainChar, true, 0.25, 0.25)
        this.physics.world.bounds.setTo(0,0, map.widthInPixels, map.heightInPixels)
    }
    update(){
        this.mainChar.update();
    }
}