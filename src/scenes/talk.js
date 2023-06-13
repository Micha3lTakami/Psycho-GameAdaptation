class Talking extends Phaser.Scene {
    constructor() {
        super('talkingScene');

    }

    create() {
        // Create an overlay rectangle
        const overlay = this.add.rectangle(0, 0, this.cameras.main.width, this.cameras.main.height, 0xa75f3b);
        overlay.setOrigin(0);
        overlay.setAlpha(0.5);
      
        // Create the text with desired style
        const textStyle = {
          fontSize: '24px',
          fontFamily: 'Optima',
          fontWeight: 'bold',
          color: '#e6dfcc', // Kanye red color
          wordWrap: {
            width: 400, // Set the desired width for word wrapping
          },
        };
      
        this.label = this.add.text(100, 100, '', textStyle);
      
        this.typewriteText('Hello,\n World!');

                // End the scene after 5 seconds
        this.time.delayedCall(5000, () => {
            this.scene.stop('talkingScene');
        });
      }
    update(){

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