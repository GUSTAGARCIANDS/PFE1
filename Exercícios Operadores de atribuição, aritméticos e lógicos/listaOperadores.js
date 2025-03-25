//Exercício 1
console.log("Exercício 1\n");

let x = 10;

console.log(x ,"\n");

//Exercício 2

console.log("Exercício 2 \n");

let a = 20;
let b = 5;

console.log("Soma: ",  a + b + "\n"); //25
console.log("Subtração: ",  a - b + "\n"); //15
console.log("Multiplicação: ",  a * b + "\n"); //100
console.log("Divisão: ",  a / b + "\n"); // 4
console.log("Resto da Divisão: ",  a % b + "\n"); //0

//Exercício 3

console.log("Exercício 3\n");

let num = -15;
let num2 = -num;

console.log(`${num2} : ${typeof num2}\n`) // Resulta em 15

//Exercício 4
let count = 5;

console.log("Exercício 4\n");

console.log(++count); // Exibe 6

console.log(--count); // Exibe 5

//Exercício 5

console.log("Exercício 5\n");
/* x = 10 dada ao exercício 1 */
x += 5;
console.log(x); // 10 + 5 = 15

x -= 3;
console.log(x); // 15 - 3 = 12

x *= 2;
console.log(x); // 12 * 2 = 24

x /= 4;
console.log(x); // 24 / 4 = 6

x %= 3;
console.log(x + "\n"); // 6 % 3 = 0

//Exercício 6

console.log("Exercício 6 \n");

let p = true;
let q = false;

console.log(p && q); // Exibe false

console.log(p || q); // Exibe true

console.log(!p); // Exibe false

console.log(!q + "\n"); // Exibe true

//Exercício 7

console.log("Exercício 7 \n");

console.log(0 || "Hello"); // Exibe Hello
console.log("" && "World"); // Valor vazio
console.log(null ?? "Default Value"); // Indefinido
console.log(undefined ?? 42 + "\n"); // Retorna 42

//Exercício 8

console.log("Exercício 8 \n");

let resultado = 10 + 5 * 2 > 20 && !false; // False

console.log("\n");

//Exercício 9

console.log("Exercício 9 \n");

console.log("5" - 2); //5 - 2 = 3
console.log("5" + 2); //"5" + 2 ocorre uma concatenação e vira 52
console.log(true + 1); //True automaticamente é 1, portanto 1 + 1 = 2
console.log(false + 10 + "\n"); //False automaticamente é 0, portanto é 0 + 10 = 10

//Exercício 10

console.log("Exercício 10 \n");

/*
let x = 5;
let y = 10;
let z = (x++ * --y) / 2 + (y % 3);
*/

/* z = (5++ * --10) / 2 + ((10 - 1) % 3); x não será 6 porque o incremento foi feito após a variável
   z = (5 * 9) / 2 + (9 % 3); enquanto o y foi feito o decremento antes e por isso y % 3 resulta em 0
   z = (45) / 2 + (0)
   z = 45 / 2
   z = 22.5
*/
