function ex1(){
    let a = 10;

    console.log(`Exercício 1`);

    if(a < 0){
        console.log(`${a} é negativo`);
    }
    else if(a > 0){
        console.log(`${a} é positivo`);
    }
    else{
        console.log(`${a} é igual à 0`);
    }

    console.log(`\n`);
}

ex1();

function ex2(){
    let b = 4;

    console.log(`Exercício 2`);

    if(b % 2 === 1){
        console.log(`${b} é ímpar`);
    }
    else{
        console.log(`${b} é par`);
    }

    console.log(`\n`);
}

ex2();

function ex3(){ 

    console.log(`Exercício 3`);
    console.log(`\n`);
}

ex3();

function ex4(){
    let x = 2;
    let y = 3;

    console.log(`Exercício 4`);

    if(x < y){
        console.log(`${x} é menor que ${y}`);
    }
    else if(x > y){
        console.log(`${x} é maior que ${y}`);
    }
    else{
        console.log(`${x} é igual à ${y}`);
    }

    console.log(`\n`);
}

ex4();

function ex5(){
    let c = 1;

    console.log(`Exercício 5`);

    console.log(c < 0 ? `${c} é negativo` : c = 0 ? `${c} é igual à zero` : `${c} é positivo`);

    console.log(`\n`);
}

ex5();

function ex6(){
    let escolha = 2;
    
    console.log(`Exercício 6`);

    let menu = prompt(```Escolha uma dessas opções:
        1- Início
        2- Sobre
        3- Sair
        ```);

    escolha = parseInt(escolha)

    switch(escolha){

        case 1: console.log(`Início`);
        break;

        case 2: console.log(`Sobre`);
        break;

        case 3: console.log(`Sair`);
        break;
    }

    console.log(`\n`);
}

ex6();

function ex7(){
    let r = 0;

    console.log(`Exercício 7`);

    while(r != 5){
        r++;
        console.log(`${r}`);
    }

    console.log(`\n`);
}

ex7();

function ex8(){
    let u = 5;

    console.log(`Exercício 8`);

    do{
        console.log(`${u}`);
        --u;
    }
    while(u != 0){
        
    }

    console.log(`\n`);
}

ex8();

function ex9(){
    
    console.log(`Exercício 9`);

    for(let k = 1; k < 11; k++){
        console.log(`${k}`);
    }

    console.log(`\n`);
}

ex9();

function ex10(){
    
    console.log(`Exercício 10`);

    let soma = 0;
    for(let s = 1; s < 11; s++){
        soma += s;
        console.log(soma);
    }

    console.log(`\n`);
}

ex10();

function ex11(){
    
    console.log(`Exercício 11`);

    numeros = [1, 4, 6, 7];
    for(let i = 0; i < numeros.length; i++){
        console.log(`${numeros[i]}`)
    }

    console.log(`\n`);
}

ex11();

function ex12(){
    
    console.log(`Exercício 12`);

    listaNomes = ["Gustavo","Júlio","Kaiki","Alves"]

    for(let nomes of listaNomes){
        console.log(nomes);
    }

    console.log(`\n`);
}

ex12();

function ex13(){
    
    console.log(`Exercício 13`);

    let pessoa = {
        nome: "Snatus",
        idade: "17",
        email: "snatusblequi@gmail.com"
    };

    for(let lista in pessoa){
        console.log(lista);
    }

    console.log(`\n`);
}

ex13();

function ex14(){
    
    console.log(`Exercício 14`);

    for(let z = 1; z < 11; z++){
        console.log(`${z}`);
        if(z = 5){
            break;
        }
    }

    console.log(`\n`);
}

ex14();

function ex15(){
    
    console.log(`Exercício 15`);

    for(let i = 1; i < 11; i++){
        if(i = 7){
            continue;
        }
        console.log(`${i}`);
    }

    console.log(`\n`);
}

ex15();

function ex16(){
    let nota = 1

    console.log(`Exercício 16`);
    
    if(nota < 6){
        console.log(`O aluno está reprovado`);
    }
    else if(nota = 6 || nota < 8){
        console.log(`O aluno está de recuperação`);
    }
    else{
        console.log(`O aluno está aprovado`);
    }

    console.log(`\n`);
}

ex16();

function ex17(){
    let n = 2

    console.log(`Exercício 17`);

    for(let j = 1; j < 11; j++){
        console.log(`${j} * ${n} =`,  j * n);
    }

    console.log(`\n`);
}

ex17();

function ex18(){
    const matriz = [7, "Gustavo", true, null, 4]

    console.log(`Exercício 18`);

    for(let numeros of matriz){
        typeof(numeros);
    }

    console.log(`\n`);
}

ex18();

function ex19(){
    
    console.log(`Exercício 19`);
    const palavra = prompt(Digite uma palavra);
    const palavraInvertida = palavra.split('').reverse().join('');
      
    if (palavra === palavraInvertida) {
        console.log(`É um palíndromo`); 
    } else {
        console.log(`Não é um palíndromo`);
    }
      

    console.log(`\n`);
}

ex19();

function ex20(){
    
    console.log(`Exercício 20`);

    do{
        menuInterativo = prompt("Escolha uma dessas opções: 1- Verificar Positivo, 2- Par ou Ímpar, 3- Turno, 4- Maior de 2 números, 5- Ternário, 6- Menu Switch simples, 7- Contador While de 1 à 5, 8- Contagem Regressiva While de 5 à 1, 9- Imprimir de 1 à 10 com For, 10- Somar números com For, 11- Imprimir Array com For, 12- For Of com Array, 13- For In, 14- Contagem Break, 15- Contagem Continue, 16- Nota do Aluno, 17- Tabuada, 18- Elementos de Array misto, 19- Palíndromo, 20- Menu com Switch e While");

        switch(menuInterativo){
            case 1: ex1();
            break;
    
            case 2: ex2();
            break;
    
            case 3: ex3();
            break;
    
            case 4: ex4();
            break;
    
            case 5: ex5();
            break;
    
            case 6: ex6();
            break;
    
            case 7: ex7();
            break;
    
            case 8: ex8();
            break;
    
            case 9: ex9();
            break;
    
            case 10: ex10();
            break;
    
            case 11: ex11();
            break;
    
            case 12: ex12();
            break;
    
            case 13: ex13();
            break;
    
            case 14: ex14();
            break;
    
            case 15: ex15();
            break;
    
            case 16: ex16();
            break;
    
            case 17: ex17();
            break;
    
            case 18: ex18();
            break;
    
            case 19: ex19();
            break;
    
            case 20: ex20();
            break;
        }
        while(menuInterativo != 20);
    
    }

    console.log(`\n`);
}

ex20();