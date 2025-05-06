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
    function soma(4, 2){ },
    function subtracao(4, 2){ },
    function multiplicacao(4, 2){ }
];

//Exercício 7


//Exercício 8


//Exercício 9


//Exercício 10


//Exercício 11


//Exercício 12


//Exercício 13


//Exercício 14


//Exercício 15


//Exercício 16