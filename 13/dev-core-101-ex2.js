const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question("Введите число", n =>{
    n = Number(n);
    if (n % 2 == 0){
        console.log("Числло четное");
    } else {
        console.log("Число нечетное");
    } 
  });
