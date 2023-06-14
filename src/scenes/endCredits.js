
class endCredits extends Phaser.Scene {
    constructor() {
        super('endCreditsScene');

    }

    create() {
        // Create an overlay rectangle
        const overlay = this.add.rectangle(0, 0, this.cameras.main.width, this.cameras.main.height, 0xD3D3D3);
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
        this.typewriteText('Marion screams terrified of the horror she\'s just seen...the Bates Motel is more than it seems...\nPress enter to return to the main menu');
        this.time.delayedCall(11000, () => {
            this.scene.stop('endCreditsScene');
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
}
