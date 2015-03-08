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
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
        winner = 'tie';
    } else if (playerMove == "paper") {
        switch (computerMove) {
         case "scissors":
            winner = 'computer';
            break;
         case "rock":
            winner = 'player';
            break;
        }
    } else if (playerMove == "scissors") {
        switch (computerMove) {
         case "rock":
            winner = 'computer';
            break;
         case "paper":
            winner = 'player';
            break;
        }
    } else if (playerMove == "rock") {
        switch (computerMove) {
         case "paper":
            winner = 'computer';
            break;
         case "scissors":
            winner = 'player';
            break;
        }
    } else {
        winner = "There was a problem. Matt wins!"
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
        var victor = getWinner(playerMove,computerMove);
        console.log("Player chose " + playerMove + ". " + "Computer chose " + computerMove + ". ");
        if (victor == "tie") {
            console.log("It was a tie!")
        } else {
            console.log(victor + " wins!");
        }
        if (victor == "player") {
            playerWins += 1;
        } else if (victor == "computer") {
            computerWins += 1;
        }
        var scoreboard = "Player: " + playerWins + ", Computer: " + computerWins
        console.log(scoreboard);
    }
    return [playerWins, computerWins];
}