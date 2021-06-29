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
// computerSelection;

function playRound() {
  let c = 0;
  let p = 0;
  computerSelection;
  playerSelection = prompt("pick one: rock,paper or scissors").toLowerCase();

  if (playerSelection == "rock" && computerSelection == "paper") {
    c = c + 1;
    alert("you lose! " + computerSelection + " beats " + playerSelection);
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    c = c + 1;
    alert("you lose! " + computerSelection + " beats " + playerSelection);
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    c = c + 1;
    alert("you lose! " + computerSelection + " beats " + playerSelection);
  } else if (playerSelection == computerSelection) {
    alert("it's a tie!");
  }
  // else if (playerSelection != computerSelection) {
  //   return "please enter the correct spelling for rock, paper, scissors and stop fucking around u bitch!";
  // }
  else {
    p = p + 1;
    alert("you won " + playerSelection + " beats " + computerSelection);
  }
}

// playRound(
//   (playerSelection = prompt("pick one: rock,paper or scissors").toLowerCase()),
//   computerSelection
// );
// console.log(playerSelection, computerSelection);

function game() {
  for (i = 0; i < 5; i++) {
    // cS = computerSelection;
    // playerSelection;
    playRound();
  }
}

// console.log(game());
game();
