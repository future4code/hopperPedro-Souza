/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let cartas = []
let cartasUsuario = []
let cartasPC = []
let pontuacaoUsuario = 0
let pontuacaoPC = 0

console.log("Bem vindos ao jogo de Blackjack!")
let comecarRodada = window.confirm("Quer iniciar uma nova rodada?")

while(comecarRodada == true){
   cartas = [
      {numero: "A", naipe: "Copas", valor: 11},
      {numero: "A", naipe: "Paus", valor: 11},
      {numero: "A", naipe: "Ouros", valor: 11},       
      {numero: "A", naipe: "Espadas", valor: 11},
      {numero: 2, naipe: "Copas", valor: 2},
      {numero: 2, naipe: "Paus", valor: 2},
      {numero: 2, naipe: "Ouros", valor: 2},
      {numero: 2, naipe: "Espadas", valor: 2},
      {numero: 3, naipe: "Copas", valor: 3},
      {numero: 3, naipe: "Paus", valor: 3},
      {numero: 3, naipe: "Ouros", valor: 3},
      {numero: 3, naipe: "Espadas", valor: 3},
      {numero: 4, naipe: "Copas", valor: 4},
      {numero: 4, naipe: "Paus", valor: 4},
      {numero: 4, naipe: "Ouros", valor: 4},
      {numero: 4, naipe: "Espadas", valor: 4},
      {numero: 5, naipe: "Copas", valor: 5},
      {numero: 5, naipe: "Paus", valor: 5},
      {numero: 5, naipe: "Ouros", valor: 5},
      {numero: 5, naipe: "Espadas", valor: 5},
      {numero: 6, naipe: "Copas", valor: 6},
      {numero: 6, naipe: "Paus", valor: 6},
      {numero: 6, naipe: "Ouros", valor: 6},
      {numero: 6, naipe: "Espadas", valor: 6},
      {numero: 7, naipe: "Copas", valor: 7},
      {numero: 7, naipe: "Paus", valor: 7},
      {numero: 7, naipe: "Ouros", valor: 7},
      {numero: 7, naipe: "Espadas", valor: 7},
      {numero: 8, naipe: "Copas", valor: 8},
      {numero: 8, naipe: "Paus", valor: 8},
      {numero: 8, naipe: "Ouros", valor: 8},
      {numero: 8, naipe: "Espadas", valor: 8},
      {numero: 9, naipe: "Copas", valor: 9},
      {numero: 9, naipe: "Paus", valor: 9},
      {numero: 9, naipe: "Ouros", valor: 9},
      {numero: 9, naipe: "Espadas", valor: 9},
      {numero: 10, naipe: "Copas", valor: 10},
      {numero: 10, naipe: "Paus", valor: 10},
      {numero: 10, naipe: "Ouros", valor: 10},
      {numero: 10, naipe: "Espadas", valor: 10},
      {numero: "J", naipe: "Copas", valor: 10},
      {numero: "J", naipe: "Paus", valor: 10},
      {numero: "J", naipe: "Ouros", valor: 10},
      {numero: "J", naipe: "Espadas", valor: 10},
      {numero: "Q", naipe: "Copas", valor: 10},
      {numero: "Q", naipe: "Paus", valor: 10},
      {numero: "Q", naipe: "Ouros", valor: 10},
      {numero: "Q", naipe: "Espadas", valor: 10},
      {numero: "K", naipe: "Copas", valor: 10},
      {numero: "K", naipe: "Paus", valor: 10},
      {numero: "K", naipe: "Ouros", valor: 10},
      {numero: "K", naipe: "Espadas", valor: 10},
   ]

   cartasUsuario.push(comprar())
   cartasPC.push(comprar())
   cartasUsuario.push(comprar())
   cartasPC.push(comprar())

   pontuacaoUsuario = cartasUsuario.map(function(item,index,array){
      return item.valor
   })
   pontuacaoPC = cartasPC.map(function(item,index,array){
      return item.valor
   })

   somaUsuario = somar(pontuacaoUsuario)
   somaPC = somar(pontuacaoPC)

   console.log(`Usuário - cartas: ${cartasUsuario[0].numero} ${cartasUsuario[0].naipe}, 
   ${cartasUsuario[1].numero} ${cartasUsuario[1].naipe} 
   - pontuação ${somaUsuario}`)

   console.log(`Computador - cartas: ${cartasPC[0].numero} ${cartasPC[0].naipe}, 
   ${cartasPC[1].numero} ${cartasPC[1].naipe} 
   - pontuação ${somaPC}`)

   if(somaUsuario > somaPC){
      console.log("Usuário ganhou!")
   }else if(somaPC > somaUsuario){
      console.log("Computador ganhou!")
   }else{
      console.log("Empate.")
   }

   comecarRodada = window.confirm("Quer iniciar uma nova rodada?")

   cartasUsuario = []
   cartasPC = []
}
console.log("O jogo acabou.")

function comprar(){
   let sorteio = Math.floor(Math.random() * cartas.length)
   let cartaComprada = cartas[sorteio]
   cartas.splice(sorteio,1)
   return cartaComprada
}

function somar(vetor){
   let soma = 0
   for(let i of vetor){
      soma += i
   }
   return soma
}