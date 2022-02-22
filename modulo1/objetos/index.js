//Exercício de Interpretação 1
//a. Será Impresso:
// Matheus Nachtergaele
// Virginia Cavendish
// canal: "Canal Brasil", horario: "19h"



//Exercício de Interpretação 2
//a. Será Impresso:
// nome: "Juca", idade: 3, raca: "SRD"
// nome: "Juba", idade: 3, raca: "SRD"
// nome: "Jubo", idade: 3, raca: "SRD"
//b. Copia o objeto.



//Exercício de Interpretação 3
//a. Será Impresso:
// falso
// indefinido
//b. O valor "false" aparecerá pois é o valor do ponteiro pessoa["backender"].
//   O valor "undefined" aparecerá pois não há propriedade "altura"



//Exercício de Código 1
//a.
// function fraseObjeto(objeto){
//     console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]} ou ${objeto.apelidos[1]}`)
// }
// const pessoa = {
//     nome: "Pedro",
//     apelidos: ["PP", "Ganso"]
// }
// fraseObjeto(pessoa)

//b.
// const maisApelidos = {
//     ...pessoa,
//     apelidos: ["Cearense", "Pequeno", "Pé Grande"]
// }
// fraseObjeto(maisApelidos)



//Exercício de Código 2
//a.
// const pessoa1 = {
//     nome: "Pedro",
//     idade: 24,
//     profissao: "marketeiro"
// }
// const pessoa2 = {
//     nome: "Paulo",
//     idade: 25,
//     profissao: "desenvolvedor"
// }

//b.
// function cadastro(objeto){
//     const vetor = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
//     return vetor
// }

// console.log(cadastro(pessoa1))
// console.log(cadastro(pessoa2))



//Exercícios de Código 3
// //a.
// let carrinho = []

// //b.
// const fruta1 = {
//     nome: "banana",
//     disponibilidade: true
// }
// const fruta2 = {
//     nome: "mamão",
//     disponibilidade: true
// }
// const fruta3 = {
//     nome: "uva",
//     disponibilidade: false
// }

// //c.
// function adicionaCarrinho(fruta){
//     carrinho.push(fruta)
//     return carrinho
// }
// adicionaCarrinho(fruta1)
// adicionaCarrinho(fruta2)
// adicionaCarrinho(fruta3)

// //d.
// console.log(carrinho)



//Desafio 1
// function askUser(){
//     const nome = prompt("Qual é o seu nome?")
//     const idade = prompt("Quantos anos você tem?")
//     const profissao = prompt("Você tem alguma profissão?")

//     const cadastro = {
//         nome: nome,
//         idade: idade,
//         profissao: profissao
//     }

//     console.log(cadastro)
//     console.log(typeof(cadastro))
// }
// askUser()



//Desafio 2
// function filmes(objeto1, objeto2){
//     const pergunta1 = objeto1.anoLancamento < objeto2.anoLancamento
//     const pergunta2 = objeto1.anoLancamento == objeto2.anoLancamento
//     console.log(`O primeiro filme foi lançado antes do segundo? ${pergunta1}`)
//     console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${pergunta2}`)
// }
// const filme1 = {
//     nome: "Star Trek",
//     anoLancamento: 2009
// }
// const filme2 ={
//     nome: "Star Wars",
//     anoLancamento: 1977
// }
// filmes(filme1,filme2)



//Desafio 3
// function controleEstoque(fruta){
//     fruta.disponibilidade = !fruta.disponibilidade
//     console.log(fruta)
//     return fruta
// }
// controleEstoque(fruta1)