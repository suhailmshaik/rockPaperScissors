function computerPlay() {
  let computer = Math.floor(Math.random() * 3) + 1;
  if (computer == 1) {
    return "rock";
  } else if (computer == 2) {
    return "paper";
  } else if (computer == 3) {
    return "scissors";
  }
}

// console.log(computerSelection);

computerSelection = computerPlay();
playerSelection = prompt("pick one: rock,paper or scissors").toLowerCase();

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    return "you lose! " + computerSelection + " beats " + playerSelection;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "you lose! " + computerSelection + " beats " + playerSelection;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "you lose! " + computerSelection + " beats " + playerSelection;
  } else if (playerSelection == computerSelection) {
    return "it's a tie!";
  } else if (playerSelection != computerSelection) {
    return "please enter the correct spelling for rock, paper, scissors and stop fucking around u bitch!";
  } else {
    return "you won " + playerSelection + " beats " + computerSelection;
  }
}

console.log(playRound(playerSelection, computerSelection));
console.log(playerSelection, computerSelection);
