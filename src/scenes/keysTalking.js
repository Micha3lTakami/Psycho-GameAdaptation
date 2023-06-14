class keysTalking extends Phaser.Scene {
    constructor() {
        super('keysTalkingScene');

    }

    create() {
        // Create an overlay rectangle
        const overlay = this.add.rectangle(0, 0, this.cameras.main.width, this.cameras.main.height, 0xa75f3b);
        overlay.setOrigin(0);
        overlay.setAlpha(0.5);
      
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
      
        this.label = this.add.text(w*.2, h*.2, '', textStyle);

        if(money == false){
            this.typewriteText('*Marion jingles the key at Sam*\nMarion: All I need is some money now and fast...the clients at my office down the street have wealth more than I can imagine\nMaybe I could borrow some..');
        }
        else{
            this.typewriteText('Marion Thinks:\nHoly smokes, maybe I can start a new life...gotta get to the car.');    
        }
        this.time.delayedCall(11000, () => {
            this.scene.stop('keysTalkingScene');
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