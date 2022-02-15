//Exercício de Interpretação 1
//   const bool1 = true
//   const bool2 = false
//   const bool3 = !bool2

//   let resultado = bool1 && bool2
//   console.log("a. ", resultado)

//   resultado = bool1 && bool2 && bool3 
//   console.log("b. ", resultado) 

//   resultado = !resultado && (bool1 || bool2) 
//   console.log("c. ", resultado)

//   console.log("d. ", typeof resultado)
//O console imprimirá:
//a. Falso
//b. Falso
//c. Verdadeiro
//d. Boleano



//Exercício de Interpretação 2
//   let primeiroNumero = prompt("Digite um numero!")
//   let segundoNumero = prompt("Digite outro numero!")

//   const soma = primeiroNumero + segundoNumero

//   console.log(soma)
//O erro está no fato de que o prompt armazena entradas como tipo "string"
//Devido a isso não será possível somar as variáveis, muito menos atribuir algum valor à constante "soma"



//Exercício de Interpretação 3
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// primeiroNumero = Number(primeiroNumero)
// segundoNumero = Number(segundoNumero)

// const soma = primeiroNumero + segundoNumero

// console.log(soma)



//Exercício de Escrita 1
// let idade = prompt("Quantos anos você tem?")
// let idadeAmigo = prompt("Quantos anos tem o(a) seu(sua) melhor amigo(a)?")

// idade = Number(idade)
// idadeAmigo = Number(idadeAmigo)

// const resultado = idade > idadeAmigo

// console.log("Sua idade é maior do que a do seu melhor amigo? - "+ resultado)

// const diferenca = idade - idadeAmigo

// console.log("Diferença de idade = "+ diferenca)



//Exercício de Escrita 2
// let par = prompt("Insira um número par")

// par = Number(par)

// resto = par % 2

// console.log("Resto da divisão por 2 = "+ resto)
//Todos os números pares tem resto 0
//Caso seja inserido um número ímpar, o resto será diferente de 0



//Exercício de Escrita 3
// let idade = prompt("Quantos anos você tem?")

// idade = Number(idade)

// const idadeMeses = idade*12
// console.log("Você tem "+ idadeMeses +" meses de idade")

// const idadeDias = idadeMeses*30
// console.log("Você tem "+ idadeDias +" dias de idade")

// const idadeHoras = idadeDias*24
// console.log("Você tem "+ idadeHoras +" horas de idade")



//Exercício de Escrita 4
let primeiroNumero = prompt("Digite um número")
let segundoNumero = prompt("Digite outro")

primeiroNumero = Number(primeiroNumero)
segundoNumero = Number(segundoNumero)

let pergunta1 = primeiroNumero > segundoNumero
console.log("O primeiro número é maior que o segundo? "+ pergunta1)

let pergunta2 = primeiroNumero == segundoNumero
console.log("O primeiro número é igual ao segundo? "+ pergunta2)

let pergunta3 = (primeiroNumero % segundoNumero) == 0
console.log("O primeiro número é divisível pelo segundo? "+ pergunta3)

let pergunta4 = (segundoNumero % primeiroNumero) == 0
console.log("O segundo número é divisível pelo primeiro? "+ pergunta4)
