//Exercício de Interpretação 1:
//  let a = 10
//  let b = 10
//  console.log(b)
//  b = 5
//  console.log(a, b)
//É mostrado o valor inicial de 'b', 10
//Em seguida é mostrado o valor de 'a', 10, e o novo valor de 'b', 5



//Exercício de Interpretação 2:
//  let a = 10
//  let b = 20
//  c = a
//  b = c
//  a = b
//  console.log(a, b, c)
//O programa acusará erro na linha 3 já que 'c' não foi declarada



//Exercício de Interpretação 3:
//  let p = prompt("Quantas horas você trabalha por dia?")
//  let t = prompt("Quanto você recebe por dia?")
//  alert(`Voce recebe ${t/p} por hora`)
//No lugar de 'p' eu colocaria "horasDiarias"
//No lugar de 't' eu colocaria "salarioDiario" 



//Exercício de Escrita 1:
    let nome
    let idade

    console.log(typeof nome + "   " + typeof idade)
//Esse tipo foi impresso pois não foi atribuído valor algum

    nome = prompt("Qual o seu nome?")
    idade = prompt("Qual a sua idade?")

    console.log(typeof nome + "   " + typeof idade)
//Nota-se que para toda entrada é atribuido o tipo "string"
    console.log("Olá "+ nome +", você tem "+ idade +" anos")



//Exercício de Escrita 2:
    let resposta = prompt("Você tem mais de 1,80m de altura?")
    console.log("Você tem mais de 1,80m de altura? - "+ resposta)

    resposta = prompt("Você tem computador?")
    console.log("Você tem computador? - "+ resposta)

    resposta = prompt("Você já tem o cartão C&A?")
    console.log("Você já tem o cartão C&A? - "+ resposta)



//Exercício de Escrita 3:
let a = prompt("Insira o valor de 'a'")
let b = prompt("Insira o valor de 'b'")
let troca

troca = a
a = b
b = troca

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)



//Desafio
let c = prompt("Insira o valor de 'c'")
let d = prompt("Insira o valor de 'd'")
let soma = 0
let multiplicacao = 0

c = Number(c)
d = Number(d)

soma = c+d
multiplicacao = c*d

console.log("Soma = "+ soma)
console.log("Multiplicação = "+ multiplicacao)
