class Loader extends Phaser.Scene {
    constructor() {
        super('loaderScene');
    }
    
    // preload()
    // pre-load game assets
    preload() {

        let canvas = document.querySelector('canvas');
        canvas.style.border = '10px #fff inset';  
        this.cameras.main.fadeIn(1000);
        

        let loadConfig = { 
            fontFamily: 'Helvetica', 
            fontSize: '48px', 
            fontStyle: 'bold', 
            fill: '#e6dfcc' 
        };
        
        // add text object for percentage loaded
        let progressText = this.add.text(game.config.width/2, game.config.height/2, '0%', loadConfig).setOrigin(0.5);

        // update the loading percentage as assets are loaded
        this.load.on('progress', function (value) {
            let percentage = Math.floor(value * 100) + '%';
            progressText.setText(percentage); 
        });
        
        //add tile info
        this.load.tilemapTiledJSON('tilemapJSON', './assets/tilemap/intro.json');
        this.load.tilemapTiledJSON('startRoomJSON', './assets/tilemap/startRoom.json');
        this.load.tilemapTiledJSON('officeJSON', './assets/tilemap/office.json');
        this.load.tilemapTiledJSON('bates_exteriorJSON', './assets/tilemap/bates_exterior.json');
        this.load.tilemapTiledJSON('bates_interiorJSON', './assets/tilemap/bates_interior.json');
        this.load.image('tilesetImage', './assets/tilemap/Modern_Exteriors_Complete_Tileset.png');
        this.load.image('tilesetImage2', './assets/tilemap/interior.png')


        //font



        // load audio file path
        this.load.path  = './assets/sounds/'
        // load audio
        this.load.audio('theme', 'psychoTheme.mp3');
        this.load.audio('stepLeft', 'stepLeft.mp3');
        this.load.audio('stepRight', 'stepRight.mp3');
        this.load.audio('knifeSelect', 'knifeSelect.mp3');
        this.load.audio('violin', 'PsychoViolin.mp3');
        this.load.audio('introMusic', 'intro.mp3');
        this.load.audio('batesMotel', 'batesMotel.mp3');
        this.load.audio('rainCar', 'rainCar.mp3');

  


        // load image file path
        this.load.path = "./assets/images/"
        // load images
        this.load.image('dialogBox', 'dialogbox.png');
        this.load.image('menuLogo', 'PsychoMenuLogo.png');
        






        // load spritesheet file path
        this.load.path = "./assets/spritesheets/"
        // load spritesheets 
        this.load.spritesheet('MarionRight', 'Marion-RIGHT.png', {frameWidth: 11, frameHeight: 17, startFrame: 0, endFrame: 3});
        this.load.spritesheet('MarionLeft', 'Marion-LEFT.png', {frameWidth: 11, frameHeight: 17, startFrame: 0, endFrame: 3});
        this.load.spritesheet('MarionUp', 'Marion-UP.png', {frameWidth: 12, frameHeight: 17, startFrame: 0, endFrame: 3});
        this.load.spritesheet('MarionDown', 'Marion-DOWN.png', {frameWidth: 12, frameHeight: 17, startFrame: 0, endFrame: 3});
        this.load.spritesheet('NormanWalk', 'NormanWalk.png', {frameWidth: 16, frameHeight: 16, startFrame: 0, endFrame: 15});
        this.load.spritesheet('NormanIdle', 'NormanIdle.png', {frameWidth: 16, frameHeight: 16, startFrame: 0, endFrame: 5});
        this.load.spritesheet('NormanAttack', 'NormanAttack.png', {frameWidth: 16, frameHeight: 16, startFrame: 0, endFrame: 11});
        this.load.spritesheet('menu', 'menu.png', {frameWidth: 245, frameHeight: 132, startFrame: 0, endFrame: 57});
        this.load.spritesheet('mother', 'mother.png', {frameWidth: 220, frameHeight: 126, startFrame: 0, endFrame: 46});
        this.load.image('door', 'door.png');

        
        
        
        // change scene upon completion
        this.load.on('complete', function () {
            this.cameras.main.fadeOut(1000,0,0,0);
            this.time.delayedCall(700, () =>{
                this.scene.start('startScene')});
        }, this);

    }
  
}
