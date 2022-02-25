//Exercício de Interpretação 1
//a.
//O código pede um número ao usuário
//Se o número for par o usuário "passa no teste"
//Senão o usuário "não passa no teste"
//b.
//Para números pares
//c.
//Para números ímpares



//Exercício de Interpretação 2
//a.
//O código serve para mostrar o preço da fruta escolhida
//b.
//"O preço da fruta Maçã é 2.25"
//c.
//Sem o "break" o código não pararia com o preço a 5.5 e imprimirá a mensagem com a continuidade do código, ou seja, preço = 5



//Exercício de Interpretação 3
//a.
//A primeira linha recebe um valor do usuário e o converte para "number"
//b.
//Para o número 10 a mensagem no terminal seria:
//"Esse número passou no teste"
//"Essa mensagem é secreta!!!"
//Para -10 não há mensagem a ser impressa
//c.
//Sim, pois quando o número for negativo e pular o 'if'
//o código acusará erro da variável "mensagem" não declarada



//Exercício de Código 1
// let idade = prompt("Quantos anos você tem?")
// idade = Number(idade)
// if(idade >= 18){
//     console.log("Você pode dirigir")
// }else{
//     console.log("Você não pode dirigir")
// }



//Exercício de Código 2
// const turno = prompt("Em que turno você estuda?. Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
// if(turno === "M"){
//     console.log("Bom dia!")
// }else if(turno === "V"){
//     console.log("Boa tarde!")
// }else{
//     console.log("Boa noite!")
// }



//Exercício de Código 3
// const turno = prompt("Em que turno você estuda?. Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
// switch(turno){
//     case "M":
//         console.log("Bom dia!")
//         break;
//     case "V":
//         console.log("Boa tarde!")
//         break;
//     case "N":
//         console.log("Boa noite!")
//         break;
//     default:
//         console.log("Maoeeeeee")
//         break;
// }



//Exercício de Código 4
// let preco = prompt("Preço do ingresso")
// let genero = prompt("Qual o gênero do filme?")
// preco = Number(preco)
// genero =  genero.toLowerCase()
// if(preco < 15 && genero === "fantasia"){
//     console.log("Bom filme!")
// }else{
//     console.log("Escolha outro filme :(")
// }



//Desafio 1
// let preco = prompt("Preço do ingresso")
// let genero = prompt("Qual o gênero do filme?")
// preco = Number(preco)
// genero =  genero.toLowerCase()
// if(preco < 15 && genero === "fantasia"){
//     const lanche = prompt("O que você vai comer?")
//     console.log(`Bom filme! Aproveite o seu ${lanche}`)
// }else{
//     console.log("Escolha outro filme :(")
// }



//Desafio 2
// const nome = prompt("Digite o seu nome completo")
// const tipoJogo = prompt("Você quer ver um jogo internacional o Doméstico? IN indica internacional; e DO indica doméstico.")
// const etapaJogo = prompt("Que mata-mata você quer assistir? SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final.")
// const categoria = prompt("Escolha uma categoria: pode ser as opções 1, 2, 3 ou 4.")
// let quantidade = prompt("Quantos ingressos você quer?")
// quantidade = Number(quantidade)
// let preco = 0

// switch(etapaJogo){
//     case "SF":
//         switch(categoria){
//             case "1":
//                 preco = 1320
//                 break;
//             case "2":
//                 preco = 880
//                 break;
//             case "3":
//                 preco = 550
//                 break;
//             case "4":
//                 preco = 220
//                 break;
//         }
//     break;
//     case "DT":
//         switch(categoria){
//             case "1":
//                 preco = 660
//                 break;
//             case "2":
//                 preco = 440
//                 break;
//             case "3":
//                 preco = 330
//                 break;
//             case "4":
//                 preco = 170
//                 break;
//         }
//     break;
//     case "FI":
//         switch(categoria){
//             case "1":
//                 preco = 1980
//                 break;
//             case "2":
//                 preco = 1320
//                 break;
//             case "3":
//                 preco = 880
//                 break;
//             case "4":
//                 preco = 330
//                 break;
//         }
//     break;
// }

// conversaoTipoJogo(preco,tipoJogo,quantidade)

// function conversaoTipoJogo(ingresso,tipo,numero){
//     if(tipo === "IN"){
//         ingresso = ingresso/4.1
//         valorTotal = ingresso*numero
//         console.log(`O valor total é $${valorTotal}`)
//     }else if(tipo === "DO"){
//         valorTotal = ingresso*numero
//         console.log(`O valor total é R$${valorTotal}`)
//     }
// }