class NormanIntro extends Phaser.Scene {
    constructor() {
        super('normanIntroScene');

    }

    create() {
        // Create an overlay rectangle
        const overlay = this.add.rectangle(0, 0, this.cameras.main.width, this.cameras.main.height, 0xa75f3b);
        overlay.setOrigin(0);
        overlay.setAlpha(0.5);
      
        // Create the text with desired style
        const textStyle = {
          fontSize: '13px',
          fontFamily: 'Optima',
          fontWeight: 'bold',
          color: '#e6dfcc', 
          wordWrap: {
            width: 300, 
          },
        };
      
        this.label = this.add.text(w*.2, h*.2, '', textStyle);

            this.typewriteText('Norman: good evening, my name is Norman Bates, and welcome to the Bates Motel\nMarion:Nice place you have here. Is that your mother in that photograph?\nNorman:Yes, she\'s... a bit unwell. I take care of her. Are you alone?\nMarion: Just passing through. The rainstorm caught me. You seem... tense.\n Norman: It\'s been a stressful time. But don\'t worry, you\'re safe here, as long as you stay away from her house up the street. Allow me to take you to your room.');
            this.time.delayedCall(25000, () => {
                this.cameras.main.fadeOut(1000, 10, 20, 30);
                this.scene.stop('normanIntroScene');
                this.scene.start('hotelToDayScene')       
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