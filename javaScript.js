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
console.log(getComputerChoice());

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

console.log(getHumanChoice());
