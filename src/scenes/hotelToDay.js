
class HotelToDay extends Phaser.Scene {
    constructor() {
        super('hotelToDayScene');

    }

    create() {
        this.gameMusic = this.sound.add('batesMotel', { loop: true });
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
        const overlay = this.add.rectangle(0, 0, this.cameras.main.width, this.cameras.main.height, 0x2e2e2e);
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


        this.typewriteText('Norman takes Marion to her room to which she sleeps, still dreaming about the new life ahead of her...\nher curiosity sparks her the next day...\nMarion: I have to know more about why Norman is so peculiar, better find Mrs.Bates');

        this.time.delayedCall(13500, () => {
            this.cameras.main.fadeOut(1000, 10, 20, 30);
            this.time.delayedCall(1000, () =>{    
                this.gameMusic.pause();
                this.scene.start('bates_exteriorScene');
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