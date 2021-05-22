let computerSelection;
let playerSelection;
let playerCount = 0;
let computerCount = 0;
let roundCount =0;
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');




//Event listeners to start and progress the game

rock.addEventListener('click', function(e) {
    updateScore(playRound('rock'));
    updateRound();
    checkWin();
});

paper.addEventListener('click', function(e) {
    updateScore(playRound('paper'));
    updateRound();
    checkWin();
});

scissors.addEventListener('click', function(e) {
    updateScore(playRound('scissors'));
    updateRound();
    checkWin();
});


//plays one round of Rock Paper Scissors with playerSelection from eventListener
function playRound(playerSelection) {
    computerSelection = computerPlay();
    let result = playRps(playerSelection,computerSelection);
    //writes result to page
    document.getElementById('player').textContent = `Player choice: ${playerSelection}`;
    document.getElementById('computer').textContent = `Computer choice: ${computerSelection}`;
    document.getElementById('roundstatus').textContent = `${result}`;

    return result;
    
    
    
}


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
// checks if either player has reached 5
function checkWin () {
    if (playerCount === 5) {
        document.getElementById('message').textContent = `You win against the robot ${playerCount} to ${computerCount}`;
    } else if (computerCount === 5) {
        document.getElementById('message').textContent = `You lose against the robot ${computerCount} to ${playerCount}`;
    }
}
function updateScore(result) {
    if (result.search('tie') != -1) {
        computerCount += 0;
        playerCount += 0;
        document.getElementById('message').textContent = `Player : ${playerCount} Computer : ${computerCount}`;
    } else if(result.search('Win') != -1) {
        playerCount += 1;
        document.getElementById('message').textContent = `Player : ${playerCount} Computer : ${computerCount}`;
    } else if (result.search('Lose') != -1) {
        computerCount += 1;
        document.getElementById('message').textContent = `Player : ${playerCount} Computer : ${computerCount}`;
    }
}

function updateRound () {
    roundCount += 1;
    document.getElementById('round').textContent = `Round : ${roundCount}`
}