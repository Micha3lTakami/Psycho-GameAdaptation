class Bates_Interior extends Phaser.Scene {
    constructor() {
        super('batesInteriorScene');

    } 
    // create()
    // create play scene
    create() {
        this.cameras.main.fadeIn(1000);        
        
        // Create bates music
        this.gameMusic = this.sound.add('introMusic', { loop: true });
        this.gameMusic.play();
        this.gameMusic.setVolume(0); 

        // tween for game music fade in
        this.tweens.add({
        targets: this.gameMusic,
        volume: 0.3,
        duration: 3000,
        ease: 'Linear',
        });
    }
    update(){

    }
}
