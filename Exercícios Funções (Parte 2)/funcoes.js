//Exercício 1
function validateNumber(n){
    if(typeof n === 'number'){
        return true;
    }
    else{
        return NaN
    }
}

console.log(validateNumber(10));

console.log(validateNumber("alves"));

//Exercício 2
function validateUser(name, age){
    if(typeof name === 'string' && name.length !== 0 && age >= 0){
        return true;
    }
    else{
        return NaN;
    }
}
console.log(validateUser("Kaiki", 20));

console.log(validateUser("", 10));

console.log(validateUser("", -1));

//Exercício 3
function factorial (n) {
    let resultado = 1;
    while (n > 1) {
        resultado *= n;
        n--;
    }
    return resultado;
}
console.log(factorial(4));


//Exercício 4
function countDown(n) {
    if (n <= 0) {
      return;
    }
    console.log(n);
    countDown(n - 1); 
}

countDown(5);

//Exercício 5
function applyFunction(fn, value){
    return fn(value);
}

//Exercício 6
const operations = [
    function soma(a, b){ return a + b; },
    function subtracao(a, b){ return a - b; },
    function multiplicacao(a, b){ return a * b; }
];

for (let i = 0; i < operations.length; i++) {
    let funcoes = operations[i];
    console.log(funcoes(4, 2));
}

//Exercício 7
const greet = function(name){
    return console.log(`Olá, ${name}!`);
}

greet(`Gustavo`);

//Exercício 8
const user = {
    sayHi: function(){
        console.log(`Olá trouxa`);
    }
}

user.sayHi();

//Exercício 9
function calculate(a, b, callback){
    return callback(a, b);
}

function soma(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mult(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

console.log(calculate(4, 2, soma));
console.log(calculate(4, 2, sub));
console.log(calculate(4, 2, mult));
console.log(calculate(4, 2, div));


//Exercício 10
function formatMessage(msg, formatter){
    if(typeof formatter === 'function'){
        return formatter(msg);
    }
    else {
        return msg;
    }
}

//Exercício 11
function fakeRequest(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(Requisição para ${url} concluída);
            resolve(Resposta de ${url});
        }, 1000);
    });
}

//Exercício 12
fakeRequest("https://api.exemplo.com/dados1")
    .then(response1 => {
        console.log(response1);
        return fakeRequest("https://api.exemplo.com/dados2");
    })
    .then(response2 => {
        console.log(response2);
        return fakeRequest("https://api.exemplo.com/dados3");
    })
    .then(response3 => {
        console.log(response3);
        console.log("Todas as requisições concluídas.");
    })
    .catch(error => {
        console.error("Erro na requisição:", error);
    });

//Exercício 13
function delayedHello() {
    setTimeout(() => {
      console.log("Hello after 1 second");
    }, 1000);
  }
  
  delayedHello();

//Exercício 14
function countToFive() {
    let contador = 0;
    const intervalId = setInterval(() => {
      contador++;
      console.log(contador);
      if (contador === 5) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
  
  countToFive();

//Exercício 15
let sum = (a, b) => {
    return a + b;
}
console.log(sum(2, 4));

//Exercício 16
const obj = {
        name: "kaiki santos",
        sayThis: () => {
            console.log(this.name);
        },
        sayThisTradicional: function () {
            console.log(this.name);
        }
    };
    
    obj.sayThis();
    obj.sayThisTradicional();