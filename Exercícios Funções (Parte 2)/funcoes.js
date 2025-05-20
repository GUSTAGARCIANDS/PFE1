//Exercício 1
function validateNumber(n){
    if(typeof n === 'number'){
        return true;
    }
    else{
        throw new Error('Parâmetro Inválido');
    }
}

console.log(validateNumber(10));

console.log(validateNumber("alves"));

//Exercício 2
function validateUser(name, age){
    if(typeof name === 'string' && name.trim() === '' && typeof age === 'number' && age >= 0){ //.trim serve para remover os espaços e 
        return true;                                                                           //contar a quant. de caracteres.
    }
    else{
        throw new Error('Parâmetro Inválido');
    }
}
console.log(validateUser("Kaiki", 20));

console.log(validateUser("", 10));

console.log(validateUser("", -1));

//Exercício 3
function factorial (n) {
    if(n <= 1){
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); //120


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

function areaQuadrado(x){
    return x * x;
}

console.log(applyFunction(areaQuadrado, 4));

//Exercício 6
const operations = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b
];

for(const operacoes of operations){
    console.log(operacoes(4, 2));
}

//Exercício 7
const greet = function(name){
    return console.log(`Olá, ${name}!`);
}

greet(`Gustavo`);

//Exercício 8
const user = {
    name:'Gustavo',
    sayHi: function(){
        return `Oi, eu sou ${this.name}`;
    }
}

console.log(user.sayHi());

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
        return formatter(msg);
}

function toUpper(text){
    return text.toUpperCase();
}

console.log(formatMessage('teste', toUpper));

//Exercício 11
function(url, callback){
    setTimeout(() => {
        callback(null, 'OK');
    }, 1000);
}
fakeRequest('/api', (err, res) => {
    console.log(res);
})

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
    let contador = 1;
    const intervalId = setInterval(() => {
      console.log(contador);
      if (contador === 5) {
        clearInterval(intervalId);
      }
      contador++;
    }, 1000);
  }
  
  countToFive();

//Exercício 15
const sum = (a, b) => {
    return a + b;
}
console.log(sum(2, 4));

//Exercício 16
const obj = {
        value = 10,
        sayThisArrow: () => {
            console.log(this.value);
        },
        sayThisRegular: function () {
            console.log(this.value);
        }
    };
    
    obj.sayThisArrow();
    obj.sayThisRegular();