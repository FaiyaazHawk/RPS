let computerSelection;
let playerSelection;


function computerPlay () {
    let choices = ["rock","paper","scissors"]
    return choices[Math.floor(Math.random() * 3)]
}
function playRps (player, computer) {
    if (player === computer) {
        return "It's a tie!";
    } else if (player === "rock" && computer === "paper") {
        return "You Lose! Paper beats Rock";
    } else if (player === "rock" && computer === "scissors") {
        return "You Win! Rock Beats Scissors";
    } else if (player === "paper" && computer === "rock") {
        return "You Win! Paper beats Rock";
    } else if (player === "paper" && computer === "scissors") {
        return "You Lose! Scissors Beats Paper";
    } else if (player === "scissors" && computer === "paper") {
        return "You Win! Scissors beats Paper";
    } else if (player === "scissors" && computer === "rock") {
        return "You Lose! Rock Beats Scissors";
    }
}

function playRound(playerSelection,computerSelection) {
    playerSelection = window.prompt("Rock, Paper or Scissors?", "");
    computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();


    let result = playRps(playerSelection,computerSelection);
    console.log("player:" + playerSelection);
    console.log("computer:" + computerSelection);
    console.log(result);
    return result;
    
    
}

function game() {
    let playerCount = 0;
    let computerCount = 0;
    for (i = 0; i <5; i++) {
        let round = playRound();
        console.log(playerCount);
        console.log(computerCount);
        if (round.search("tie") != -1) {
            computerCount += 0;
            playerCount += 0;
        } else if(round.search("Lose") != -1) {
            computerCount += 1;
        } else if (round.search("Win") != -1) {
            playerCount += 1;
        }
    }
    
    if (playerCount === computerCount) {
        console.log(`It's a tie. Player: ${playerCount}. Computer: ${computerCount}.`)
    } else if (playerCount > computerCount) {
        console.log(`You won best of five. Player:${playerCount}. Computer: ${computerCount}.`)
    } else {
        console.log (`You lost best of five. Player:${playerCount}. Computer: ${computerCount}.`)    
    }
}

game();