/*Escreva um código que receba três valores. Uma idade, 
um booleano que responda se a pessoa terminou ou não o ensino médio, 
e um booleano que responda se a pessoa está cursando alguma faculdade.

Crie um if para cada variável, checando as seguintes afirmacões:

Se a pessoa tem 18 anos ou mais;
Se a pessoa terminou o ensino médio;
Se a pessoa NÃO está cursando alguma faculdade;

Crie um if que imprima que a afirmacão é verdadeira, 
e um else para imprimir que a afirmacão não é verdadeira. */



let idade = prompt("Qual a sua idade?")
let terminouColegial = confirm("Você já terminou o Ensino Médio?")
let cursandoOutraFaculdade = confirm("Você não esta cursando alguma faculdade?")

if(idade >= 18){
    console.log("Maior de idade!")
}else{
    console.log("Maior de idade!")
}

if(terminouColegial){
    console.log("Terminou o ensino médio!")
}else{
    console.log("Ainda está cursando o ensino médio!")
}

if(!cursandoOutraFaculdade){
    console.log("Não está cursando alguma faculdade!")
}else{
    console.log("Sim está cursando alguma faculdade!")
}