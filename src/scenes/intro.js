class Intro extends Phaser.Scene {
    constructor() {
        super('introScene');

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
        volume: 0.3,
        duration: 3000,
        ease: 'Linear',
        });

        const map = this.add.tilemap('tilemapJSON');
        const intro_set = map.addTilesetImage('Modern_Exteriors_Complete_Tileset', 'tilesetImage');
        
        const baseLayer = map.createLayer('base', intro_set, 0, 0);
        const buildingLayer = map.createLayer('buildings', intro_set, 0, 0);
        const carLayer = map.createLayer('car', intro_set, 0, 0);

        const marionSpawn = map.findObject('spawn', obj => obj.name === 'marion_spawn');
        const marionSpawn2 = map.findObject('spawn', obj => obj.name === 'marion_spawn2');
        const buildEntrance = map.findObject('spawn', obj => obj.name === 'building_entrance');
        const buildEntrance2 = map.findObject('spawn', obj => obj.name === 'sam_door');

        if(money == false){
            this.mainChar = new Marion(this, marionSpawn.x, marionSpawn.y, 'MarionUp', 'MarionDown', 'MarionLeft', 'MarionRight');
        }
        else{
            this.mainChar = new Marion(this, marionSpawn2.x, marionSpawn2.y, 'MarionUp', 'MarionDown', 'MarionLeft', 'MarionRight');
        }
        this.officeDoor = new Door(this, buildEntrance.x, buildEntrance.y, 'door', 'officeScene');
        this.samDoor = new Door(this, buildEntrance2.x, buildEntrance2.y, 'door', 'startRoomScene');
        
        // enable collision based on the property created in Tiled
        buildingLayer.setCollisionByProperty({no_walk:true})
        carLayer.setCollisionByProperty({no_walk:true})

  
        this.physics.add.collider(this.mainChar, buildingLayer)
        this.physics.add.collider(this.mainChar, carLayer, () =>{
            this.scene.bringToTop('carTalkingScene');
            this.scene.launch('carTalkingScene');
            this.mainChar.canWalk = false;
            
                this.time.delayedCall(4000, () => {
                    this.mainChar.canWalk = true;
                    if(money == true && keys == true){
                        this.scene.stop();
                        if(money == true && keys == true){
                            this.gameMusic.pause();
                        }
                    }
                }, [], this);
            
        })

        // cameras
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
        this.cameras.main.startFollow(this.mainChar, true, 0.25, 0.25)
        this.physics.world.bounds.setTo(0,0, map.widthInPixels, map.heightInPixels)

    }

    update(){
        this.mainChar.update();
    }
}