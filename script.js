function computerPlay() {
  let computer = Math.floor(Math.random() * 3) + 1;
  if (computer == 1) {
    console.log("rock");
  } else if (computer == 2) {
    console.log("paper");
  } else if (computer == 3) {
    console.log("scissors");
  }
}

computerPlay();
