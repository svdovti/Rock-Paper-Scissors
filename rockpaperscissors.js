const buttons = document.querySelectorAll('input');
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let gameValue = ['Rock', 'Paper', 'Scissors']
  return gameValue[Math.floor(Math.random() * gameValue.length)]
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let result = '';

    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
    (playerSelection == 'Paper' && computerSelection == 'Rock') ||
    (playerSelection == 'Scissors' && computerSelection == 'Paper')) {
        playerScore += 1;
        result = ("You won! " + playerSelection + " beats "+ computerSelection + "! Current Player Score: " + playerScore + " Computer Score: " + computerScore);
        if (playerScore === 5) {
            result = ("You won! The final score is: " + playerScore + " : " + computerScore)
            
        }
    }
    else if (playerSelection == computerSelection) {
        result = (playerSelection + " ties with " + computerSelection + "!");
    }
    else {
        computerScore += 1;
        result = ("You lost! " + playerSelection + " beats "+ computerSelection + "! Current Player Score: " + playerScore + " Computer Score: " + computerScore);
        if (computerScore === 5) {
            result = ("You lost! The final score is: " + playerScore + " : " + computerScore)
            
        }
    }
    document.getElementById('results').innerHTML = result;
    return
}

buttons.forEach((button) =>{
    button.addEventListener('click', function(){
        playRound(button.value);
    });
})