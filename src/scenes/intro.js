class Intro extends Phaser.Scene {
    constructor() {
        super('introScene');

    } 
    // create()
    // create play scene
    create() {
        const map = this.add.tilemap('tilemapJSON');
        const intro_set = map.addTilesetImage('Modern_Exteriors_Complete_Tileset', 'tilesetImage');
        
        const baseLayer = map.createLayer('base', intro_set, 0, 0);
        const buildingLayer = map.createLayer('buildings', intro_set, 0, 0);
        const carLayer = map.createLayer('car', intro_set, 0, 0);

        const marionSpawn = map.findObject('spawn', obj => obj.name === 'marion_spawn')
        this.mainChar = new Marion(this, marionSpawn.x, marionSpawn.y, 'MarionUp', 'MarionDown', 'MarionLeft', 'MarionRight');

        // enable collision based on the property created in Tiled
        buildingLayer.setCollisionByProperty({no_walk:true})
        carLayer.setCollisionByProperty({no_walk:true})
        this.physics.add.collider(this.mainChar, buildingLayer)
        this.physics.add.collider(this.mainChar, carLayer)

        // cameras
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
        this.cameras.main.startFollow(this.mainChar, true, 0.25, 0.25)
        this.physics.world.bounds.setTo(0,0, map.widthInPixels, map.heightInPixels)

    }

    update(){
        this.mainChar.update();
    }
}