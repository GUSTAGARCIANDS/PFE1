//Exercício 1
function ex1(){
    let array = ["Gustavo", "Kaiki", "Alves", "Julio", "Otávio"];

    for(let nomes of array){
        console.log(nomes);
    }
}

//Exercício 2
function ex2(){
    let array = [10, 20, 30, 40, 50];
    let soma = 0;

    for(let numeros of array){
        soma += numeros;
    }
    console.log(soma);
}

//Exercício 3
function ex3(){
    let pessoa = {
        nome: "Bruno",
        idade: 18,
        cidade: "Sorocaba"
    };

    for(let dados in pessoa){
        console.log(`${dados}: ${pessoa[dados]}`);
    }
}

//Exercício 4
function ex4(){

}

//Exercício 5
function ex5(){

}

//Exercício 6
function ex6(){
    let array = ["Nome", 10, undefined];

    for(let tipos of array){
        console.log(`${tipos}: `+ typeof tipos);
    }
}

//Exercício 7
function ex7(){

}

//Exercício 8
function ex8(){

}

//Exercício 9
function ex9(){

}

//Exercício 10
function ex10(){

}
