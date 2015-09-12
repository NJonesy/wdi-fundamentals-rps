'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}


function getWinner(playerMove,computerMove) {
    var winner = 'Computer';
    if (computerMove === playerMove) {
        winner = 'tie';
    }
    else if ((computerMove === "rock") && (playerMove === "paper")) {
        winner = 'Player';
    }
    else if ((computerMove === "paper") && (playerMove === "scissors")) {
        winner = 'Player';
    }
    else if ((computerMove === "scissors") && (playerMove === "rock")) {
        winner = 'Player';
    }
    return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    
    var playerWins = 0;
    var computerWins = 0;    

    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();      
        var winner = getWinner(playerMove,computerMove);
            
        if (winner === 'Player') {
           playerWins +=1; 
           console.log("Player point");
        }
        else if (winner === 'Computer') {
            computerWins +=1;
            console.log("Computer point");
        }
        else {
            playerWins +=0;
            computerWins +=0;
            console.log("Tie, no points!");
        }
    
    console.log('Player chose ' + playerMove + ' while computer chose ' + computerMove);
    console.log('The score is ' + playerWins + ' vs ' +  computerWins);
    }
}
playToFive();