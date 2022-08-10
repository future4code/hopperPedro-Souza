import { idade, nome } from "./constantes.js"

// Exercício 1
// a) Responda como comentário no seu código: 
// Como fazemos para acessar os parâmetros passados na 
// linha de comando para o Node?

// Para acessar os parâmetros usa-se o array process.argv

// b) Crie um programa que receba seu nome e sua idade. 
// Após receber estes valores, imprima no console uma mensagem 
// que siga a seguinte estrutura:

console.log('\x1b[33m%s\x1b[0m', `Olá, ${nome}! Você tem ${idade} anos.`)

// c) Altere o programa acima para que mostre também a sua idade 
// daqui a sete anos.

console.log('\x1b[36m%s\x1b[0m', `Daqui a 7 anos você terá ${idade + 7} anos`)