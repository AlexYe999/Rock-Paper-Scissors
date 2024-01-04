//randomly returns a string containing rock, paper or scissors
function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    if (rand == 0) {
        return "Rock";
    } else if (rand == 1) {
        return "Scissors";
    } else {
        return "Paper";
    }
}

//given two selections plays a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    let pSel = playerSelection.toLowerCase();
    let cSel = computerSelection.toLowerCase();

    switch (pSel) {
        case 'rock':
            switch (cSel) {
                case 'scissors':
                    return "You win! Rock beats scissors!"
                case 'rock':
                    return "Draw! You both chose rock."
                case 'paper':
                    return "You lose! Paper beats rock."
            }
        case 'scissors':
            switch (cSel) {
                case 'scissors':
                    return "Draw! You both chose scissors."
                case 'rock':
                    return "You lose! Rock beats scissors."
                case 'paper':
                    return "You win! Scissors beats paper!"
            }
        case 'paper':
            switch (cSel) {
                case 'scissors':
                    return "You lose! Scissors beats paper."
                case 'rock':
                    return "You win! Paper beats rock!"
                case 'paper':
                    return "Draw! You both chose paper."
            }
        default:
            return "Invalid input " + playerSelection + ".";
    }

}

let playerScore = 0
let computerScore = 0

function eventListenerHelper(choice) {
    let result = playRound(choice, getComputerChoice())
    document.getElementById("end-round").innerHTML = result
    if (result.toLowerCase().includes("win")) {
        playerScore++;
    } else if (result.toLowerCase().includes("lose")) {
        computerScore++;
    }
    document.getElementById("result").innerHTML = playerScore + '-' + computerScore
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) document.getElementById("ending").innerHTML = "WOOHOO! You Won!"
        if (computerScore === 5) document.getElementById("ending").innerHTML = "Bad Luck! You Lost."
        let toHide = document.querySelectorAll('.play')
        for (let i = 0; i < toHide.length; i++) {
            toHide[i].style.display = "none";
        }
    }
}

document.getElementById("rock").addEventListener("click", function () { eventListenerHelper("rock") });
document.getElementById("paper").addEventListener("click", function () { eventListenerHelper("paper") });
document.getElementById("scissors").addEventListener("click", function () { eventListenerHelper("scissors") });