// PSYCHO

// enable JS Strict Mode
'use strict';

// define and configure main Phaser game object
let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    // set parent container for where playscreen should be displayed on webpage
    parent : 'psycho',
    height: 320  ,
    width: 480,
    scale: {
   
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    zoom: 2,
    scene: [ Intro,Loader, Start, Menu ]
}

// define game
let game = new Phaser.Game(config);

// reserve keyboard variables
let keyUP, keyLEFT, keyRIGHT, keyENTER, keyR;

// define globals
let centerX = game.config.width/2;
let centerY = game.config.height/2;
let w = game.config.width;
let h = game.config.height;


