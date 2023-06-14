class bossTalking extends Phaser.Scene {
    constructor() {
        super('bossTalkingScene');

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

        if(keys == true){
            this.typewriteText('*Marion\'s boss Mr.Lowery looks down at Marion*\nMr.Lowery: Take this to the bank, Marion. It\'s an important transaction. Keep it safe.\nMarion, conflicted, forces a smile and nods. she walks to the car, ready to run away...');
        }
        else{
            this.typewriteText('*Marion\'s boss Mr.Lowery looks down at Marion*\nMr.Lowery: Take this to the bank, Marion. It\'s an important transaction. Keep it safe.\nMarion, conflicted, forces a smile and nods.');    
        }
        this.time.delayedCall(13000, () => {
            this.scene.stop('bossTalkingScene');
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