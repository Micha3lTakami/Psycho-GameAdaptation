// PSYCHO
// Major aspects of Phaser used: physics systems, cameras, text objects, animation manager, tween manager, and tile maps
// a top-down rpg style adaptation of the first half of Alfred Hitchcock's Psycho with an abridged ending
// scenes adapted: intro with Sam, Marion steals the money from Mr.Lowery's client, Marion meets norman during the night at the Bates motel
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
            
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    zoom: 2,
    scene: [ Loader, Start, Menu, Intro, Talking, StartRoom, Office, keysTalking, bossTalking, carTalking, townToBates, Bates_Interior, Bates_Exterior, NormanIntro, HotelToDay, Mother, endCredits ]
}

// define game
let game = new Phaser.Game(config);

// reserve keyboard variables
let keyUP, keyLEFT, keyRIGHT, keyENTER, keyR;
let cursors = null;
let talked = false;
let normanTalk = false;
let mother = false;
let keys = false;
let money = false;

// define globals
let centerX = game.config.width/2;
let centerY = game.config.height/2;
let w = game.config.width;
let h = game.config.height;


