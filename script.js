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

//plays 5 rounds of rock, paper scissors, alerting the 
//results of each round and returning the total results
function game() {
    let pTally = 0;
    let cTally = 0;
    for (let i = 0; i < 5; i++) {
        let choice = prompt("Rock, paper or scissors?");
        let result = playRound(choice, getComputerChoice());
        alert(result);
        while (result.toLowerCase().includes("invalid")) {
            choice = prompt("Rock, paper or scissors?");
            result = playRound(choice, getComputerChoice());
            alert(result);
        }
        if (result.toLowerCase().includes("win")) {
            pTally++;
        } else if (result.toLowerCase().includes("lose")) {
            cTally++;
        }
    }
    if (pTally > cTally) {
        return "You win! You beat the computer " + pTally + "-" + cTally + ".";
    } else if (pTally < cTally) {
        return "You lost! You computer beat you " + cTally + "-" + pTally + ".";
    } else {
        return "You drew! You won " + pTally + " times.";
    }
}