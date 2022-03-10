//this function generates compter's selection
let computerPlay = () => {
  let ran = Math.ceil(Math.random() * 3);

  switch (ran) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
};

//this function prompts user to select either rock or paper or scissor
let userPlay = () => {
  let u = prompt("Select 1 for rock, 2 for paper, 3 for scissor");
  switch (u) {
    case "1":
      return "rock";
    case "2":
      return "paper";
    case "3":
      return "scissors";
    default:
      return "choose the valid option";
  }
};

let c = 0; //c variable stores score for the computer
let p = 0; //p variable stores score for the player

//this function plays a round of the game and returns score
let playRound = (playerSelection, computerSelection) => {
  // console.log(`player selection: ${playerSelection}`);
  // console.log(`computer selection: ${computerSelection}`);

  if (playerSelection == "rock" && computerSelection == "paper") {
    alert("you lose! " + computerSelection + " beats " + playerSelection);
    return (c = c + 1);
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    alert("you lose! " + computerSelection + " beats " + playerSelection);
    return (c = c + 1);
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    alert("you lose! " + computerSelection + " beats " + playerSelection);
    return (c = c + 1);
  } else if (playerSelection == computerSelection) {
    alert("it's a tie!");
  } else {
    alert("you won " + playerSelection + " beats " + computerSelection);
    return (p = p + 1);
  }
};

//this function runs the game for 5 rounds and alerts the result to the user
let game = () => {
  for (i = 0; i < 5; i++) {
    playRound(userPlay(), computerPlay());
  }

  if (c > p) {
    alert("Computer Won!");
  } else if (p > c) {
    alert("You Won!");
  } else if (p == c) {
    alert("It's a Tie Bitch!");
  }
  console.log(`my score: ${p}`);
  console.log(`computer's score: ${c}`);
};

game();
