// computerPlay() picks either rock, paper or scissors randomly

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

// variables "c" and "p" store the scores for the game
// c for computer and p for player
// c increases by 1 if computer wins in a round and p increases by 1 if player wins a round

let c = 0;
let p = 0;

// playRound() asks the user for an input through prompt() and assigns the input as playerSelection
// computerPlay() value is assigned as computerSelection
// then it evaluates the following logic and gives out the result(round's winner) through alert
// rock > scissors
// paper > rock
// scissors > paper

function playRound() {
  computerSelection = computerPlay();
  playerSelection = prompt("pick one: rock,paper or scissors").toLowerCase();

  if (playerSelection == "rock" && computerSelection == "paper") {
    c = c + 1;
    alert("you lose! " + computerSelection + " beats " + playerSelection);
    return c;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    c = c + 1;
    alert("you lose! " + computerSelection + " beats " + playerSelection);
    return c;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    c = c + 1;
    alert("you lose! " + computerSelection + " beats " + playerSelection);
    return c;
  } else if (playerSelection == computerSelection) {
    alert("it's a tie!");
  } else {
    p = p + 1;
    alert("you won " + playerSelection + " beats " + computerSelection);
    //   );
    return p;
  }
}

// game() runs playRound() for 5 times and calculates the values of "c" and "p"
// if c > p = computer won
// else if p > c = player won
// and gives out an alert on who won the game

function game() {
  for (i = 0; i < 5; i++) {
    playRound();
  }
  if (p > c) {
    alert("You Won!");
  } else {
    alert("computer won");
  }
}

game();
