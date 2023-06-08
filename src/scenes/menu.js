class Menu extends Phaser.Scene{
    constructor(){
        super('menuScene')
    }
    // create()
    // create start scene
    create() {
        this.gameMusic = this.sound.add('theme', { loop: true });
        this.gameMusic.play({ seek: 5 });
        this.gameMusic.setVolume(0.5);
        this.gameMusic.setRate(0.6);
        
        // 8-bit background
        let batesBCKG = this.add.image(w/3, h/2, 'menu');
        batesBCKG.setScale(0.65);

        // tweened logo
        const logoStyle = { fontFamily: 'Impact', fontSize: '48px', color: '#732002' };
        const logo = this.add.text(w*.1, h*.15, 'Psycho TEMP MENU', logoStyle);
        this.tweens.add({
          targets: logo,
          scaleY: { value: 1.05, yoyo: true, duration: 1000, ease: 'Sine.easeIn' },
          y: '+=10',
          yoyo: true,
          repeat: -1,
          duration: 3000,
          ease: 'Sine.easeInOut',
        });

        // directions
        const directionStyle = { fontFamily: 'Courier', fontSize: '16px', color: '#f29057' };
        const directions = this.add.text(w*.1, h*.5, 'Use [W,A,S,D] to move', directionStyle);
        const directions2 = this.add.text(w*.1, h*.6,'[SPACE] to interact', directionStyle);
        // define keys
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }

    // update()
    // menu update function
    update() {
        //console.log("made it");
        if (Phaser.Input.Keyboard.JustDown(keyENTER)) {
            console.log("made it")
            this.sound.play('knifeSelect');
            this.cameras.main.fadeOut(1000,10,20,30,);
            this.gameMusic.stop();
            this.time.delayedCall(1200, () =>{
                // restyle border for next scene
                let canvas = document.querySelector('canvas');
                canvas.style.border = '10px #ADD8E6 inset';   
                this.scene.start('introScene'); 
            });
        }
    }
}