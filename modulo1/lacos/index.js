// Exercícios de Interpretação de Código
// 
// 1.
// O resultado será: 0+0+1+2+3+4 = 10.
// 
// 2.
// a. Será impresso os números da array lista
// que são maiores do que 18, no caso: 19,
// 21, 23, 25, 27, 30.
// b. Sim, para o caso de for(let i of array)
// basta usar array.indexOf[i]
// 
// 3.
// O console imprimirá uma meia pirâmide de 
// asteriscos, com quatro asteriscos na base
// e um em cima.



// Exercícios de Escrita de Código
// 
// 1.
// let numeroBichos = Number(prompt("Quantos bichos de estimação você tem?"))
// let nomes = []
// if(numeroBichos === 0){
//     console.log("Que pena! Você pode adotar um pet!")
// }else{
//     for(let i=0; i<numeroBichos; i++){
//         let nome = prompt("Quais os nomes deles?")
//         nomes.push(nome)
//     }
//     console.log(nomes)
// }
// 
// 2.
// let arrayOriginal = [5,10,30,15,20,25,3]
// 
// a.
// function imprimeVetor(vetor){
//     for (let i of vetor){
//         console.log(i)
//     }
// }
// imprimeVetor(arrayOriginal)
// 
// b.
// function imprimeVetorDecimal(vetor){
//     for (let i of vetor){
//         console.log(i/10)
//     }
// }
// imprimeVetorDecimal(arrayOriginal)
// 
// c.
// function imprimeVetorPares(vetor){
//     let vetorPares = []
//     for(let i of vetor){
//         if (i%2 === 0){
//             vetorPares.push(i)
//         }
//     }
//     console.log(vetorPares)
// }
// imprimeVetorPares(arrayOriginal)
// 
// d.
// function imprimeVetorStrings(vetor){
//     for (let i of vetor){
//         console.log(`O elemento do índex ${vetor.indexOf(i)} é: ${i}`)
//     }
// }
// imprimeVetorStrings(arrayOriginal)
// 
// e.
// function imprimeMaiorMenor(vetor){
//     let maior = vetor[0]
//     let menor = vetor[0]
//     for(let i of vetor){
//         if(maior<i){
//             maior = i
//         }
//         if(menor>i){
//             menor = i
//         }
//     }
//     console.log(`O maior número é ${maior}. O menor número é ${menor}`)
// }
// imprimeMaiorMenor(arrayOriginal)



// Desafios
// 1.
// let numeroPensado = Number(prompt("Que número você está pensando?"))
// let chute = 0
// let tentativas = 0
// while(chute != numeroPensado){
//     chute = Number(prompt("Chute!"))
//     if(chute < numeroPensado){
//         console.log("Errrrrou, é maior")
//     }else{
//         console.log("Errrrrou, é menor")
//     }
//     tentativas++
// }
// console.log("Acertou!!!!")
// console.log(`O número de tentativas foi: ${tentativas}`)
// 
// 2.
// let numeroPensado = Math.floor((Math.random() * 100) + 1)
// let chute = 0
// let tentativas = 0
// while(chute != numeroPensado){
//     chute = Number(prompt("Chute!"))
//     if(chute < numeroPensado){
//         console.log("Errrrrou, é maior")
//     }else{
//         console.log("Errrrrou, é menor")
//     }
//     tentativas++
// }
// console.log("Acertou!!!!")
// console.log(`O número de tentativas foi: ${tentativas}`)
//
// Foi fácil fazer a alteração, não consigo pensar em nada
// que fosse melhor que a alteração que fiz.