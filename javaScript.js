// Gets computer's choice randomly
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return 'rock';
  } else if (randomNumber === 2) {
    return 'paper';
  } else if (randomNumber === 3) {
    return 'scissors';
  }
}

const results = document.querySelector('#results');
const versus = document.querySelector('#versus');
const score = document.querySelector('#score');
const winner = document.querySelector('#winner');
const buttons = document.querySelectorAll('button');
const MAXSCORE = 5;

let humanScore = 0;
let computerScore = 0;

// Play one round
function playRound(humanChoice, computerChoice) {
  computerChoice = getComputerChoice();

  if (humanChoice === 'rock') {
    if (computerChoice === 'rock') {
      versus.textContent = `${humanChoice} vs ${computerChoice}`;
      results.textContent = 'Tie!';
    } else if (computerChoice === 'paper') {
      versus.textContent = `${humanChoice} vs ${computerChoice}`;
      computerScore++;
      results.textContent = 'You lose. Paper beats Rock!';
    } else if (computerChoice === 'scissors') {
      versus.textContent = `${humanChoice} vs ${computerChoice}`;
      humanScore++;
      results.textContent = 'You win! Rock beats Scissors!';
    }
  } else if (humanChoice === 'paper') {
    if (computerChoice === 'rock') {
      versus.textContent = `${humanChoice} vs ${computerChoice}`;
      humanScore++;
      results.textContent = 'You Win! Paper beats Rock!';
    } else if (computerChoice === 'paper') {
      versus.textContent = `${humanChoice} vs ${computerChoice}`;
      results.textContent = 'Tie!';
    } else if (computerChoice === 'scissors') {
      versus.textContent = `${humanChoice} vs ${computerChoice}`;
      computerScore++;
      results.textContent = 'You lose. Scissors beat Paper.';
    }
  } else if (humanChoice === 'scissors') {
    if (computerChoice === 'rock') {
      versus.textContent = `${humanChoice} vs ${computerChoice}`;
      computerScore++;
      results.textContent = 'You lose. Rock beats Scissors!';
    } else if (computerChoice === 'paper') {
      versus.textContent = `${humanChoice} vs ${computerChoice}`;
      humanScore++;
      results.textContent = 'You Win! Scissors beat Paper.';
    } else if (computerChoice === 'scissors') {
      versus.textContent = `${humanChoice} vs ${computerChoice}`;
      results.textContent = 'Tie!';
    }
  }
  score.textContent = `YOU: ${humanScore} vs ${computerScore} :COMPUTER`;

  // Winning logic
  if (humanScore === MAXSCORE) {
    winner.textContent = 'YOU WIN!!!';
  } else if (computerScore === MAXSCORE) {
    winner.textContent = 'COMPUTER WINS!!!';
  }

  if (humanScore === MAXSCORE || computerScore === MAXSCORE) {
    buttons.forEach((button) => (button.disabled = true));
  }
}

// UI thing
const main = document.querySelector('#main');
main.addEventListener('click', (event) => {
  let target = event.target;

  switch (target.id) {
    case 'rock':
      playRound('rock', getComputerChoice());
      break;
    case 'paper':
      playRound('paper', getComputerChoice);
      break;
    case 'scissors':
      playRound('scissors', getComputerChoice);
      break;
  }
});
