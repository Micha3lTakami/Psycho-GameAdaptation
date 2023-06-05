class Start extends Phaser.Scene{
    constructor(){
        super('startScene')
    }
    // create()
    // create start scene
    create() {
        let canvas = document.querySelector('canvas');
        canvas.style.border = '10px #f58b57 inset';  
        this.cameras.main.fadeIn(1000);

        // start scene text configuration
        let startConfig = {
            fontFamily: 'Helvetica',
            fontWeight: 'bold',
            stroke: '#e4a672',
            fontSize: '12px',
            color: '#e4a672',
            allign: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        // display start screen text and set default background
        this.cameras.main.setBackgroundColor('d5f2f2');
        let title = this.add.text(game.config.width/2, game.config.height/2, 'PSYCHO', startConfig).setOrigin(0.5);
        title.setScale(3);
        this.add.text(game.config.width/2, game.config.height*.6, 'Press (ENTER) to continue ', startConfig).setOrigin(0.5);
        let names = this.add.text(game.config.width/2, game.config.height*.85, 'by Michael Takami', startConfig).setOrigin(0.5);

        

        // define keys
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
      
    }

    // update()
    // menu update function
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyENTER)) {
            console.log("made it")
            this.cameras.main.fadeOut(1000,10,20,30,);
            this.time.delayedCall(1100, () =>{
                // restyle border for next scene
                let canvas = document.querySelector('canvas');
                canvas.style.border = '10px #ADD8E6 inset';   
                this.scene.start('menuScene'); 
            });
        }
    }
}