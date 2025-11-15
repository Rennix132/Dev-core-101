const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// спрашиваем по поводу числа
rl.question("Введите первое число: ", (a) => {
    rl.question("Введите второе число: ", (b) => {
        rl.question("Введите операцию (+, -, *, /): ", (op) => {

            a = Number(a);
            b = Number(b);

            let result;

            if (op === "+") result = a + b;
            else if (op === "-") result = a - b;
            else if (op === "*") result = a * b;
            else if (op === "/") result = b === 0 ? "Ошибка" : a / b;
            else result = "Неизвестная операция";

            console.log("Результат:", result);

            rl.close();
        });
    });
});
