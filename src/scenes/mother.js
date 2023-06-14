class Mother extends Phaser.Scene{
    constructor(){
        super('motherScene')
    }
    // create()
    // create start scene
    create() {
        this.cameras.main.fadeIn(1000);
        this.gameMusic = this.sound.add('violin', { loop: true });
        this.gameMusic2 = this.sound.add('knifeSelect', { loop: true });
        this.gameMusic.play();
        this.gameMusic2.play();
        this.gameMusic.setVolume(0.5);
        this.gameMusic2.setVolume(2);

        
        // 8-bit background
        let batesBCKG = this.add.sprite(w/2, h/2+5, 'mother');
        batesBCKG.setScale(2.7);

        this.anims.create({
            key: 'gif_animation2',
            frames: this.anims.generateFrameNumbers('mother', { start: 0, end: 46, first: 0 }),
            frameRate: 15,
            repeat: -1 // Set to -1 to loop the animation indefinitely
        });
    
        // Play the GIF animation
        batesBCKG.play('gif_animation2');

                // Create the text with desired style
                const textStyle = {
                    fontSize: '20px',
                    fontFamily: 'Optima',
                    fontWeight: 'bold',
                    color: '#e6dfcc', 
                    wordWrap: {
                      width: 300, 
                    },
                  };
        this.time.delayedCall(7000, () => {
            this.label = this.add.text(w*.2, h*.2, 'To be Continued...', textStyle);
            this.label2 = this.add.text(w*.2, h*.3, 'Press enter to return to the menu', textStyle);
        }, [], this);

                // define keys
                keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(keyENTER)) {
            console.log("made it")
            this.sound.play('knifeSelect');
            this.cameras.main.fadeOut(1000,10,20,30,);
            this.gameMusic.stop();
            this.gameMusic2.stop();
            this.time.delayedCall(1200, () =>{
                // restyle border for next scene
                let canvas = document.querySelector('canvas');
                canvas.style.border = '10px #ADD8E6 inset';   
                this.scene.start('menuScene'); 
            });
        }
    }

}