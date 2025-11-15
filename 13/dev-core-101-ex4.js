const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question("Введите число: ", n => {
    n = Number(n);
    let isPrime = true;
  
    if (n < 2) {
      isPrime = false;
    } else {
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          isPrime = false;
          break;
        }
      }
    }
  
    if (isPrime) {
      console.log("Число простое");
    } else {
      console.log("Число не простое");
    }
  
    readline.close();
  });
  