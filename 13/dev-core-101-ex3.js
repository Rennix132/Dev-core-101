const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let secret = Math.floor(Math.random() * 10) + 1;

  function guessNumber() {
    readline.question("Угадайте число от 1 до 10: ", guess => {
      guess = Number(guess);
      if (guess === secret) {
        console.log("Поздравляю, вы угадали число", secret);
        readline.close();
      } else if (guess > secret) {
        console.log("Меньше!");
        guessNumber();
      } else {
        console.log("Больше!");
        guessNumber();
      }
    });
  }
  
  guessNumber();