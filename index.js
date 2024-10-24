//Guess the random number
function guessNumberGame() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let guess = null;
  while (guess !== randomNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 10: "));
    if (guess > randomNumber) {
      alert("Too high! Try again.");
    } else if (guess < randomNumber) {
      alert("Too low! Try again.");
    } else if (guess === randomNumber) {
      alert("Congratulations! You guessed the correct number.");
    } else {
      alert("Please enter a valid number.");
    }
  }
}
guessNumberGame();
