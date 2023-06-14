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
          fontSize: '15px',
          fontFamily: 'Optima',
          fontWeight: 'bold',
          color: '#e6dfcc', // Kanye red color
          wordWrap: {
            width: 300, // Set the desired width for word wrapping
          },
        };
      
        this.label = this.add.text(w*.2, h*.2, '', textStyle);
      
        this.typewriteText('Marion: Oh Sam please can we run away together? I want nothing more than to be with you darling!\nSam: Marion, you know we don\'t have any money\nMarion:What if I could get some?\nSam:Then I would take the keys from that box behind you and run away!\nMarion: Let me do it for you then!');

        // end talk after 15
        this.time.delayedCall(15000, () => {
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