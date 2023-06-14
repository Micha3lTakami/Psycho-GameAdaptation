
class townToBates extends Phaser.Scene {
    constructor() {
        super('townToBatesScene');

    }

    create() {
        this.gameMusic = this.sound.add('rainCar', { loop: true });
        this.gameMusic.play();
        this.gameMusic.setVolume(0); // Set initial volume to 0

        // tween for game music fade in
        this.tweens.add({
        targets: this.gameMusic,
        volume: 0.3,
        duration: 1500,
        ease: 'Linear',
        });

        // Create an overlay rectangle
        const overlay = this.add.rectangle(0, 0, this.cameras.main.width, this.cameras.main.height, 0x2395d);
        overlay.setOrigin(0);

      
        // Create the text with desired style
        const textStyle = {
          fontSize: '20px',
          fontFamily: 'Optima',
          fontWeight: 'bold',
          color: '#FFEFC1', 
          wordWrap: {
            width: 300, 
          },
        };
      
        this.label = this.add.text(w*.2, h*.2, '', textStyle);


        this.typewriteText('Marion drives for hours into the night before a storm begins\nMarion: ZzZzZ\nMarion: AGHH, I\'m falling asleep at the Wheel, I better go in for the night\nThe Bates Motel...looks like a nice place.\n*Marion pulls the car over and heads inside*');

        this.time.delayedCall(13500, () => {
            this.cameras.main.fadeOut(1000, 10, 20, 30);
            this.time.delayedCall(1000, () =>{    
                this.gameMusic.pause();
                this.scene.start('batesInteriorScene');
            });
        });
      }

    typewriteText(text){
        const length = text.length
        let i = 0
        this.time.addEvent({
            callback: () => {
                this.label.text += text[i]
                ++i
            },
            repeat: length - 1,
            delay: 50
        })
    }
    typewriteTextWrapped(text){
        const lines = this.label.getWrappedText(text)
        const wrappedText = lines.join('\n')

        this.typewriteText(wrappedText)
    }
}