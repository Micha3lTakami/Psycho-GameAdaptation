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
          color: '#e6dfcc', 
          wordWrap: {
            width: 300, 
          },
        };
      
        this.label = this.add.text(w*.2, h*.2, '', textStyle);
      
        this.typewriteText('Marion: I need to start a new, my life here is seemingly going nowhere.\nSam: Marion, you don\'t have any money where would you even go\nMarion:What if I could get some?\nSam: The world would be your Oyster darling\nMarion thinks ~ I have to retrieve my keys from the chest and somehow, get some money...');

        // end talk after 15
        this.time.delayedCall(18000, () => {
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