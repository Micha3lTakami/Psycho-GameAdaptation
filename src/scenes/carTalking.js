class carTalking extends Phaser.Scene {
    constructor() {
        super('carTalkingScene');

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

        if(keys == true && money == true){
            this.typewriteText('Marion: I have money and a car, I deserve happiness. I\'ll take the chance, disappear, and leave it all behind, good days are ahead.');
            this.time.delayedCall(8000, () => {
                this.scene.stop('carTalkingScene');
                this.cameras.main.fadeOut(1000,10,20,30,);
                this.scene.start('townToBatesScene');
                
            });
        }
        else{
            this.typewriteText('Marion: hmmmm I can\'t leave without both my keys and some money, better go get them...');    
            this.time.delayedCall(5000, () => {
                this.scene.stop('carTalkingScene');
            });
        }

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