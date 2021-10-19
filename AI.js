"use strict"

const Player = require ('./player')

class Ai extends Player{
    constructor(name){
        super(name)
    }


    playerGesturePick(){
        this.gesture = this.gestures [Math.floor(Math.random() * this.gestures.length)];
        
    }

}

module.exports = Ai