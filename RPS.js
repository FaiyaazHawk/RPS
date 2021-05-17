let computerSelection;
let playerSelection;

//making the images clickable and getting that to output as player choice

const rock = document.getElementById('rock');
rock.addEventListener('click', function(e) {console.log('rock')});
const paper = document.getElementById('paper');
paper.addEventListener('click', function(e) {console.log('paper')});
const scissors = document.getElementById('scissors');
scissors.addEventListener('click', function(e) {console.log('scissors')});



//picks selection for computer
function computerPlay () {
    let choices = ["rock","paper","scissors"]
    return choices[Math.floor(Math.random() * 3)]
}
//game logic for Rock Paper Scissor
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
//plays one round of Rock Paper Scissors
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




//plays 5 rounds of RPS and outputs results, ties count as loss for both players
/*function game() {
    let playerCount = 0;
    let computerCount = 0;
    for (i = 0; i <5; i++) {
        let round = playRound();
        if (round.search("tie") != -1) {
            computerCount += 0;
            playerCount += 0;
        } else if(round.search("Lose") != -1) {
            computerCount += 1;
        } else if (round.search("Win") != -1) {
            playerCount += 1;
        }
        console.log("Player:" + playerCount);
        console.log("Computer:" + computerCount);
    }
    
    if (playerCount === computerCount) {
        console.log(`It's a tie. Player: ${playerCount}. Computer: ${computerCount}.`)
    } else if (playerCount > computerCount) {
        console.log(`You won best of five. Player:${playerCount}. Computer: ${computerCount}.`)
    } else {
        console.log (`You lost best of five. Player:${playerCount}. Computer: ${computerCount}.`)    
    }
}

game(); */