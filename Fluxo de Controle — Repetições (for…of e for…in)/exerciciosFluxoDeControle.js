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
    let pessoa = {
        nome: "Bruno",
        idade: 18,
        cidade: "Sorocaba"
    };

    let qtdPropriedades = 0;
    for(const dados in pessoa){
        qtdPropriedades++;
    }
    console.log(qtdPropriedades);
}

//Exercício 5
function ex5(){
}

//Exercício 6
function ex6(){
    let array = ["Nome", 10, undefined];

    for(let tipos of array){
        console.log(`${tipos}: `+ typeof tipos);
    };
}

//Exercício 7
function ex7(){
    let pessoas = {
        nomes: ['Bruno', 'Gustavo', 'Kaiki'],
        idades: [12, 17, 40] 
    };
    for(const somaIdade in pessoas){
        if(somaIdade === "idades"){
            const idades = pessoas[somaIdade];
            for(let i = 0; i < idades.length; i++){
                const idade = idades[i];
                console.log(`Nome: ${pessoas.nomes[i]} e sua idade próxima idade: ${idade + 1}`);
            }
        }
    }
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
