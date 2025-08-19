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

function getHumanChoice() {
  const humanNumber = parseInt(
    prompt(`Enter a value:
    1: Rock
    2: Paper
    3: Scissors `)
  );
  if (humanNumber === 1) {
    return 'rock';
  } else if (humanNumber === 2) {
    return 'paper';
  } else if (humanNumber === 3) {
    return 'scissors';
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  if (humanChoice === 'rock') {
    if (computerChoice === 'rock') {
      console.log(humanChoice + ' vs ' + computerChoice);
      console.log('Rock vs Rock. Tie!');
    } else if (computerChoice === 'paper') {
      console.log(humanChoice + ' vs ' + computerChoice);
      computerScore++;
      console.log('You lose. Paper beats Rock!');
    } else if (computerChoice === 'scissors') {
      console.log(humanChoice + ' vs ' + computerChoice);
      humanScore++;
      console.log('You Win! Rock beats Scissors!');
    }
  } else if (humanChoice === 'paper') {
    if (computerChoice === 'rock') {
      console.log(humanChoice + ' vs ' + computerChoice);
      humanScore++;
      console.log('You Win! Paper beats Rock!');
    } else if (computerChoice === 'paper') {
      console.log(humanChoice + ' vs ' + computerChoice);
      console.log('Paper vs Paper. Tie!');
    } else if (computerChoice === 'scissors') {
      console.log(humanChoice + ' vs ' + computerChoice);
      computerScore++;
      console.log('You lose. Scissors beat Paper.');
    }
  } else if (humanChoice === 'scissors') {
    if (computerChoice === 'rock') {
      console.log(humanChoice + ' vs ' + computerChoice);
      computerScore++;
      console.log('You lose. Rock beats Scissors!');
    } else if (computerChoice === 'paper') {
      console.log(humanChoice + ' vs ' + computerChoice);
      humanScore++;
      console.log('You Win! Scissors beat Paper.');
    } else if (computerChoice === 'scissors') {
      console.log(humanChoice + ' vs ' + computerChoice);
      console.log('Scissors vs Scissors. Tie!');
    }
  }
}

playRound();
