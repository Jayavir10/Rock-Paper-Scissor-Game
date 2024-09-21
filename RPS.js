const choices = ["Rock", "Paper", "Scissor"];
let playerScore = 0;
let computerScore = 0;

function PlayGame(playerChoice) 
{
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";
    if (playerChoice === computerChoice) {
        result = "It's a Tie!🙄";
        
    } else if ((playerChoice === "Rock" && computerChoice === "Scissor") ||
               (playerChoice === "Paper" && computerChoice === "Rock") ||
               (playerChoice === "Scissor" && computerChoice === "Paper")) {
       
        result = "You Win!😃";
        playerScore++;
    } else {
        result = "You Lose!☹️";
        computerScore++;
    }


    document.getElementById("showPlayerChoice").textContent = `Player Choice: ${playerChoice}`;
    document.getElementById("showComputerChoice").textContent = `Computer Choice: ${computerChoice}`;
    document.getElementById("showResult").textContent = result;
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;

    
    document.getElementById("showResult").classList.remove("greenText", "redText");


    if (result === "You Win!😃") {
        document.getElementById("showResult").classList.add("greenText");
    } else if (result === "You Lose!☹️") {
        document.getElementById("showResult").classList.add("redText");
    }
}


function newGame() {
    playerScore = 0;
    computerScore = 0;

    document.getElementById("showPlayerChoice").textContent = "Player Choice:";
    document.getElementById("showComputerChoice").textContent = "Computer Choice:";
    document.getElementById("showResult").textContent = "";
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;

    document.getElementById("showResult").classList.remove("greenText", "redText");
}









// const choices = ["rock", "paper", "scissor"]
// const showPlayerChoice = document.getElementById("showPlayerChoice")
// const showComputerChoice = document.getElementById("showComputerChoice")
// const showResult = document.getElementById("showResult")
// const playerScoreDisplay = document.getElementById("playerScore")
// const computerScoreDisplay = document.getElementById("computerScore")

// let playerScore = 0;
// let computerScore = 0;

// function PlayGame(playerChoice)
// {
// const computerChoice = choices[Math.floor(Math.random() * 3)];
// let result = ""

// if(playerChoice === computerChoice){
//     result = "Draw"
// }
// else{
// switch(playerChoice){
//     case "rock":
//         result = (computerChoice === "scissors") ? "You Win!" : "You Lose!";
//         break;
    
//     case "paper":
//         result = (computerChoice === "rock") ? "You Win!" : "You Lose!";
//         break;
    
//     case "scissor":
//         result = (computerChoice === "paper") ? "You Win!" : "You Lose!";
//         break;
// }
// }

// showPlayerChoice.textContent = `Player Choice: ${playerChoice}`;
// showComputerChoice.textContent =  `Computer Choice: ${computerChoice}`;
// showResult.textContent = `Result: ${result}`;

// showResult.classList.remove("greenText", "redText");

// switch(result){
// case "You Win!":
//     showResult.classList.add("greenText");
//     playerScore++;
//     playerScoreDisplay.textContent = playerScore;
//     break;
// case "You Lose!":
//     showResult.classList.add("redText"); 
//     computerScore++;
//     computerScoreDisplay.textContent = computerScore;
// }


// }