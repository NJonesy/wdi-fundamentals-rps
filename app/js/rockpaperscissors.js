////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
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
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
 var move;
   move || getInput();
}

function getComputerMove(move) {
 var move;
   move || randomPlay();
}

function getWinner(playerMove,computerMove) {
var winner;

if (computerMove === playerMove) {
    winner = "tie"
    console.log("Tie!")
}
else if ((computerMove === "Rock") && (playerMove === "Paper")) {
    winner = "Player"
    console.log("Player wins!")
}
else if ((computerMove === "Rock") && (playerMove === "Scissors")) {
    winner = "Computer"
    console.log("Computer wins!")
}
else if ((computerMove === "Paper") && (playerMove === "Rock")) {
    winner = "Computer"
    console.log("Computer wins!")
}
else if ((computerMove === "Paper") && (playerMove === "Scissors")) {
    winner = "Player"
    console.log("Player wins!")
}
else if ((computerMove === "Scissors") && (playerMove === "Paper")) {
    winner = "Computer"
    console.log("Computer wins!")
}
else if ((computerMove === "Scissors") && (playerMove === "Rock")) {
    winner = "Player"
    console.log("Player wins!")
}
else{
winner = "tie"
console.log("Void!");
}

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

