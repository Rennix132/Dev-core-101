const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question("Введите число Цельсия", cel => {
    let far = (cel * 9/5) +32;
    console.log("темп фар" + far)
    readline.close();
  });
