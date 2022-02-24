//Exercício Interpretação 1
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))
//a. Vai ser impresso '10' e '50'
//b. Não apareceria nada no console



//Exercício de Interpretação 2
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)
// a. Esta função irá conferir se o texto contém a string "cenoura", e retornará verdadeiro ou falso
// b. As saídas serão:
//      i. verdadeiro
//      ii. verdadeiro
//      iii. falso



//Exercício de Código 1
//a.
// function apresentacao(){
//     console.log("Eu sou Pedro, tenho 24 anos, moro em Belém e sou marketeiro.")
// }
// apresentacao()
//b.
// function apresentacao(nome,idade,cidade,profissao){
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
// }
// const nome = "Pedro"
// const idade = 24
// const cidade = "Belém"
// const profissao = "marketeiro"
// apresentacao(nome,idade,cidade,profissao)



//Exercício de Código 2
//a.
// function soma(number1,number2){
//     return number1+number2
// }
// primeiro = 4
// segundo = 5
// console.log(soma(primeiro,segundo))
//b.
// function compara(number1,number2){
//     return number1 >= number2
// }
// primeiro = 5
// segundo = 4
// console.log(compara(primeiro,segundo))
//c.
// function par(numero){
//     return (numero % 2) == 0
// }
// console.log("O número é par? "+ par(10))
//d.
// function multiTarefas(mensagem){
//     console.log(mensagem.length)
//     console.log(mensagem.toUpperCase())
// }
// const texto = "Vinde a mim todos os que estão cansados e eu os aliviarei"
// multiTarefas(texto)



//Exercício de Código 3
// function soma(number1,number2){
//     s = number1 + number2
//     console.log(`Soma = ${s}`)
// }
// function subtracao(number1,number2){
//     console.log(`Subtração = ${number1-number2}`)
// }
// function multiplicacao(number1,number2){
//     console.log("Multiplicação = "+number1*number2)
// }
// function divisao(number1,number2){
//     console.log("Divisão = "+number1/number2)
// }
// let valor1 = prompt("Insira um número")
// let valor2 = prompt("Mais um")
// valor1=Number(valor1)
// valor2=Number(valor2)
// soma(valor1,valor2)
// subtracao(valor1,valor2)
// multiplicacao(valor1,valor2)
// divisao(valor1,valor2)



//Desafio 1
//a.
// let imprimir = (parametro) => {
//     console.log(parametro)
// }
// imprimir("Amai-vos uns aos outros como Eu vos amei. Somente assim podereis ser reconhecidos como meus discípulos.")
//b.
// let imprimir = (parametro) => {
//     console.log(parametro)
// }
// let somaImpressa = (valor1,valor2) => {
//     let soma = valor1 + valor2
//     imprimir(soma)
// }
// somaImpressa(3,8)



//Desafio 2
// function pitagoras(catetoOposto, catetoAdjacente){
//     hipotenusa = (catetoOposto**2 + catetoAdjacente**2)**(1/2) 
//     return hipotenusa
// }
// let resultado = pitagoras(3,4)
// console.log(resultado)