//Exercício 1
function sayHello(){
    console.log(`Hello, World!`);
}
sayHello();

//Exercício 2
function sum(a, b){
    return a + b;
}

console.log(sum(5,7));

//Exercício 3
function localExample(){
    let message = "Variável Local";
    
    console.log(message);
}

localExample();

console.log(message);

//Exercício 4
function greet(name){
    console.log(`Hello ` + name + `!`);
}

greet(`kaiki`);

greet(`littlegutas`);

greet(`alvestrouxa`);

//Exercício 5
function calculateArea(radius){
    return Math.PI * radius * radius;
}

console.log(calculateArea(2));

//Exercício 6
function currentDate(){
    let today = new Date();
    
    console.log(today);
}

currentDate();

//Exercício 7
let x = 10;

function shadowExample(x){
    console.log(x);
}

shadowExample(20);

console.log(x);

//Exercício 8
function isPrime(n){
    if(n % 2 == 1){
        return true;
    }
    else{
        return false;
    }
}

console.log(isPrime(3));

console.log(isPrime(11));

console.log(isPrime(6));

//Exercício 9
function toFahrenheit(celsius){
    fahrenheit = celsius * 1.8 + 32;
    
    console.log(fahrenheit)
}

function toCelsius(fahrenheit){
    celsius = 5/9 * (fahrenheit - 32);
    
    console.log(celsius);
}

toFahrenheit(30);

toCelsius(77);

//Exercício 10
function getMax(arr) {
    let maiorNumero = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maiorNumero) {
        maiorNumero = arr[i];
      }
    }
    return maiorNumero;
  }
  
  const numeros = [3, 10, 4];
  const maiorNumero = getMax(numeros);
  console.log("O maior número do array é:", maiorNumero);

//Exercício 11
function average(scores){
    let soma = 0;
    
    for(let i = 0; i < scores.length; i++){
        soma += scores[i];
    }
    
    let media = soma / scores.length;
    
    return media;
}

const resultado = average([8, 7.5, 9, 10]);
console.log(resultado);

//Exercício 12
function fullName(firstName, lastName){
    return console.log(firstName + ` ` + lastName);
}

fullName(`Kaiki`, `Snatus`);

fullName(`Little`, `Gutas`);

fullName(`Kaique`, `Premissa`);

//Exercício 13
function double(n){
    return n * 2;
}

function quadruple(n){
    return double(double(n));
}

console.log(double(2));

console.log(quadruple(3));

//Exercício 14
let mode = "light";

function toggleMode(mode){
    mode = mode === "light" ? "dark" : "light";
    
    return mode;
}

/*Variável Global*/
console.log(mode);

/*Variável Local da função toggleMode*/
console.log(toggleMode("light"));

