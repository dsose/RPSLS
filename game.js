"use strict"

const Player = require('./player');
let prompt = require('prompt-sync');
const Ai = require('./ai');
const userInput = prompt();


class Game {
    constructor(gestures, score, gesture) {
    this.gestures = gestures;
    this.score = score;  
    this.Player = new Player();
    this.gesture;
    }
}

choosePlayer(); {
    Player.name = Player.setName();
    if(this.playerNumber > 1){
        
        playerTwo.name  = playerTwo.setName();
        return;
    }

    else{
    console.log(`Welcome ${playerOne.name}`);
    return 1;
  }
}

















module.exports = Game