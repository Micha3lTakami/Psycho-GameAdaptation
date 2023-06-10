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
        this.load.image('tilesetImage', './assets/tilemap/Modern_Exteriors_Complete_Tileset.png');
        this.load.image('tilesetImage2', './assets/tilemap/interior.png')
        //this.load.font('HitchFont', './assets/fonts/Hitchcock.ttf');

        // teletext stuff
        this.load.path = './assets/teletext/';
        this.load.json('dialog', 'dialog.json');
        this.load.bitmapFont('gem_font', 'gem.png', 'gem.xml');

        // load audio file path
        this.load.path  = './assets/sounds/'
        // load audio
        this.load.audio('theme', 'psychoTheme.mp3');
        this.load.audio('stepLeft', 'stepLeft.mp3');
        this.load.audio('stepRight', 'stepRight.mp3');
        this.load.audio('knifeSelect', 'knifeSelect.mp3');
  


        // load image file path
        this.load.path = "./assets/images/"
        // load images
        this.load.image('menu','bates.png');
        this.load.image('dialogBox', 'dialogbox.png');
        






        // load spritesheet file path
        this.load.path = "./assets/spritesheets/"
        // load spritesheets 
        this.load.spritesheet('MarionRight', 'Marion-RIGHT.png', {frameWidth: 11, frameHeight: 17, startFrame: 0, endFrame: 3});
        this.load.spritesheet('MarionLeft', 'Marion-LEFT.png', {frameWidth: 11, frameHeight: 17, startFrame: 0, endFrame: 3});
        this.load.spritesheet('MarionUp', 'Marion-UP.png', {frameWidth: 12, frameHeight: 17, startFrame: 0, endFrame: 3});
        this.load.spritesheet('MarionDown', 'Marion-DOWN.png', {frameWidth: 12, frameHeight: 17, startFrame: 0, endFrame: 3});

        
        
        
        // change scene upon completion
        this.load.on('complete', function () {
            this.cameras.main.fadeOut(1000,0,0,0);
            this.time.delayedCall(700, () =>{
                this.scene.start('startScene')});
        }, this);

    }
  
}
