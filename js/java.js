let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    decides = Math.random()
    if (decides <= .33) {
        return attack = "Rock";
    }
    else if (decides <= .66) {
        return attack = "Scissors";
    }
    else {
        return attack = "Paper";
    }
    console.log(attack)
}

function getHumanChoice() {

    let sign = prompt("Please select between Rock Paper or Scissors");

    let flag = 0;
    while (flag == 0) {
        if (sign.toUpperCase() === "ROCK") {
            flag++;
        }
        else if (sign.toUpperCase() === "PAPER") {
            flag++;
        }
        else if (sign.toUpperCase() === "SCISSORS") {
            flag++;
        }
        else {
            sign = prompt("Please select a valid choice between Rock Paper or Scissors");
        }
     
    }
    return sign.toUpperCase();
}

function playRound() {

    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice().toUpperCase();  
    console.log(humanSelection + computerSelection)
    if (humanSelection == computerSelection) {
        console.log("Tie Game")
    }
    else if (humanSelection == 'ROCK') {
        if (computerSelection == 'PAPER') {
            console.log("Computer Won")
            computerScore++;
        }
        else {
            console.log("You won!")
            humanScore++;
        }
    }
    else if (humanSelection == 'SCISSORS') {
        if (computerSelection == 'ROCK') {
            console.log("Computer Won")
            computerScore++;
        }
        else {
            console.log("You won!")
            humanScore++;
        }
    } 
    else if (humanSelection == 'PAPER') {
        if (computerSelection == 'SCISSORS') {
            console.log("Computer Won")
            computerScore++;
        }
        else {
            console.log("You won!")
            humanScore++;
        }
    }
}

function playGame(games) {
    humanScore = 0;
    computerScore = 0;
    i = 0
    while (i < games) {
        playRound();
        console.log("The score is" + humanScore + " against " + computerScore);
        i++;
        console.log(humanScore);
        console.log(computerScore);
    }
    console.log("Game Over!")
}