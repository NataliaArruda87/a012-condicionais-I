//Crie um código que receba uma const numérica qualquer. 
//Crie um if para verificar se o número guardado na const é par. 
//Caso seja, imprima no console a mensagem: "o número é par".

const num = prompt("Digite um numero:")

if(num % 2 === 0){
    console.log("É um numero par!");
} else {
    console.log("É um numero impar!");
}