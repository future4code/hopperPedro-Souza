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
let pontuacaoUsuarioTotal = 0
let pontuacaoPCTotal = 0
let pontuacaoUsuarioRodada = []
let pontuacaoPCRodada = []

console.log("Bem vindos ao jogo de Blackjack!")
let comecarRodada = false
comecarRodada = window.confirm("Quer iniciar uma nova rodada?")
let maisUmaCarta = false

while(comecarRodada){
   cartas = [
      {numero: "A ♥️", valor: 11},
      {numero: "A ♣️", valor: 11},
      {numero: "A ♦️", valor: 11},       
      {numero: "A ♠️", valor: 11},
      {numero: "2 ♥️", valor: 2},
      {numero: "2 ♣️", valor: 2},
      {numero: "2 ♦️", valor: 2},
      {numero: "2 ♠️", valor: 2},
      {numero: "3 ♥️", valor: 3},
      {numero: "3 ♣️", valor: 3},
      {numero: "3 ♦️", valor: 3},
      {numero: "3 ♠️", valor: 3},
      {numero: "4 ♥️", valor: 4},
      {numero: "4 ♣️", valor: 4},
      {numero: "4 ♦️", valor: 4},
      {numero: "4 ♠️", valor: 4},
      {numero: "5 ♥️", valor: 5},
      {numero: "5 ♣️", valor: 5},
      {numero: "5 ♦️", valor: 5},
      {numero: "5 ♠️", valor: 5},
      {numero: "6 ♥️", valor: 6},
      {numero: "6 ♣️", valor: 6},
      {numero: "6 ♦️", valor: 6},
      {numero: "6 ♠️", valor: 6},
      {numero: "7 ♥️", valor: 7},
      {numero: "7 ♣️", valor: 7},
      {numero: "7 ♦️", valor: 7},
      {numero: "7 ♠️", valor: 7},
      {numero: "8 ♥️", valor: 8},
      {numero: "8 ♣️", valor: 8},
      {numero: "8 ♦️", valor: 8},
      {numero: "8 ♠️", valor: 8},
      {numero: "9 ♥️", valor: 9},
      {numero: "9 ♣️", valor: 9},
      {numero: "9 ♦️", valor: 9},
      {numero: "9 ♠️", valor: 9},
      {numero: "10 ♥️", valor: 10},
      {numero: "10 ♣️", valor: 10},
      {numero: "10 ♦️", valor: 10},
      {numero: "10 ♠️", valor: 10},
      {numero: "J ♥️", valor: 10},
      {numero: "J ♣️", valor: 10},
      {numero: "J ♦️", valor: 10},
      {numero: "J ♠️", valor: 10},
      {numero: "Q ♥️", valor: 10},
      {numero: "Q ♣️", valor: 10},
      {numero: "Q ♦️", valor: 10},
      {numero: "Q ♠️", valor: 10},
      {numero: "K ♥️", valor: 10},
      {numero: "K ♣️", valor: 10},
      {numero: "K ♦️", valor: 10},
      {numero: "K ♠️", valor: 10},
   ]

   cartasUsuario.push(comprar())
   cartasPC.push(comprar())
   cartasUsuario.push(comprar())
   cartasPC.push(comprar())

   cartasUsuario = regraAsesDuplos(cartasUsuario)
   cartasPC = regraAsesDuplos(cartasPC)

   pontuacaoUsuarioRodada = cartasUsuario.map(function(item,index,array){
      return item.valor
   })
   pontuacaoPCRodada = cartasPC.map(function(item,index,array){
      return item.valor
   })

   pontuacaoUsuarioTotal = somar(pontuacaoUsuarioRodada)
   pontuacaoPCTotal = somar(pontuacaoPCRodada)

   numerosUsuario = cartasUsuario.map(function(item,index,array){
      return item.numero
   })
   maisUmaCarta = window.confirm(`Suas cartas são ${numerosUsuario}. 
   A carta revelada do computador é ${cartasPC[0].numero}. Deseja comprar mais uma carta?`)

   while(maisUmaCarta){
      cartasUsuario.push(comprar())
      numerosUsuario = cartasUsuario.map(function(item,index,array){
         return item.numero
      })
      maisUmaCarta = window.confirm(`Suas cartas são ${numerosUsuario}. 
      A carta revelada do computador é ${cartasPC[0].numero}. Deseja comprar mais uma carta?`)
   }

   pontuacaoUsuarioRodada = cartasUsuario.map(function(item,index,array){
      return item.valor
   })
   pontuacaoUsuarioTotal = somar(pontuacaoUsuarioRodada)

   if(pontuacaoUsuarioTotal <= 21){
      while(pontuacaoPCTotal < pontuacaoUsuarioTotal){
         cartasPC.push(comprar())
         pontuacaoPCRodada = cartasPC.map(function(item,index,array){
            return item.valor
         })
         pontuacaoPCTotal = somar(pontuacaoPCRodada)
      }
   }

   numerosPC = cartasPC.map(function(item,index,array){
      return item.numero
   })

   console.log(`Usuário - cartas: ${numerosUsuario} - pontuação ${pontuacaoUsuarioTotal}`)
   console.log(`Computador - cartas: ${numerosPC} - pontuação ${pontuacaoPCTotal}`)

   if(pontuacaoUsuarioTotal > 21){
      console.log("Pontuação do usuário acima de 21, Computador ganhou!")
   }else if(pontuacaoPCTotal > 21){
      console.log("Pontuação do computador acima de 21, Usuário ganhou!")
   }else if(pontuacaoUsuarioTotal > pontuacaoPCTotal){
      console.log("Usuário ganhou!")
   }else if(pontuacaoPCTotal > pontuacaoUsuarioTotal){
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

function regraAsesDuplos(vetor){
   let vetorNumero = vetor.map(function(item,index,array){
      return item.numero
   })
   while(vetorNumero[0].indexOf('A') != -1 && vetorNumero[1].indexOf('A') != -1){
      console.log(`Ases Duplos ${vetorNumero}! Compre novamente...`)
      vetor = []
      vetor.push(comprar())
      vetor.push(comprar())
      vetorNumero = vetor.map(function(item,index,array){
         return item.numero
      })
   }
   return vetor
}
