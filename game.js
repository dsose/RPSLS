"use strict"

const Player = require('./player');
const prompt = require('prompt-sync');
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

gameRules(); {
    let Player1 = this.playerOne;
    let Player2 = this.playerTwo;


    while (Player1.score < 2 && Player2.score < 2) {
      Player1.gestureChoice();
      Player2.gestureChoice();

      if (Player1.gesture === Player2.gesture) {
        console.log(`You both chose ${this.gestureChoice}, try again`);
  
      }
      else if ((Player1.gesture === 0 || Player1.gesture === 1) && (Player2.gesture === 0 || Player2.gesture === 1)) {
        console.log("Paper covers rock!");
        if (Player1.gesture === 1) {
          Player1.score++
          console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
        }
        else if (Player2.gesture === 1) {
          Player2.points++
          console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
        }
      }
  
      else if ((Player1.gesture === 1 || Player1.gesture === 2) && (Player2.gesture === 2 || Player2.gesture === 1)) {
        console.log("Scissors cuts paper!");
        if (Player1.gesture === 2) {
          Player1.score++
          console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
        }
        else if (Player2.gesture === 2) {
          Player2.points++
          console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
        }
      }
  
      else if ((Player1.gesture === 2 || Player1.gesture === 3) && (Player2.gesture === 3 || Player2.gesture === 2)) {
        console.log("Paper covers rock!");
        if (Player1.gesture === 3) {
          Player1.score++
          console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
        }
        else if (Player2.gesture === 3) {
          Player2.points++
          console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
        }
      }
  
      else if ((Player1.gesture === 2 || Player1.gesture === 3) && (Player2.gesture === 3 || Player2.gesture === 2)) {
        console.log("Scissors decapitates Lizard!");
        if (Player1.gesture === 3) {
          Player1.score++
          console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
        }
        else if (Player2.gesture === 3) {
          Player2.points++
          console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
        }
      }
  
      else if ((Player1.gesture === 4 || Player1.gesture === 5) && (Player2.gesture === 5 || Player2.gesture === 4)) {
        console.log("Lizard poisons Spock!");
        if (Player1.gesture === 4) {
          Player1.score++
          console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
        }
        else if (Player2.gesture === 4) {
          Player2.points++
          console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
        }
      }
  
      else if ((Player1.gesture === 2 || Player1.gesture === 4) && (Player2.gesture === 4 || Player2.gesture === 2)) {
        console.log("Spock smashes Scissors!");
        if (Player1.gesture === 2) {
          Player1.score++
          console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
        }
        else if (Player2.gesture === 2) {
          Player2.gesture++
          console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
        }
      }
  
      else if ((Player1.gesture === 3 || Player1.gesture === 1) && (Player2.gesture === 3 || Player2.gesture === 1)) {
        console.log("Lizard eats Paper!");
        if (Player1.gesture === 3) {
          Player1.score++
          console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
        }
        else if (Player2.gesture === 3) {
          Player2.points++
          console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
        }
      }
  
      else if ((Player1.gesture === 1 || Player1.gesture === 4) && (Player2.gesture === 1 || Player2.gesture === 4)) {
        console.log("Paper disproves Spock!");
        if (Player1.gesture === 1) {
          Player1.score++
          console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
        }
        else if (Player2.gesture === 1) {
          Player2.points++
          console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
        }
      }
  
      else if ((Player1.gesture === 0 || Player1.gesture === 4) && (Player2.gesture === 0 || Player2.gesture === 4)) {
        console.log("Spock vaporizes Rock!");
        if (Player1.gesture === 4) {
          Player1.score++
          console.log(`${Player1.name} score a point. total points for each team are /n ${Player1.points} /n ${Player2.points}`);
        }
        else if (Player2.gesture === 4) {
          Player2.points++
          console.log(`${Player2.name} scores a point. total points for each team are /n ${Player1.points} /n ${Player2.points} `);
        }
      }
    }
  }

  gameWinner(); 
    if (Player.points === 3) {
      console.log(`${Player.name} is the winner!`);
    }


                  










module.exports = Game