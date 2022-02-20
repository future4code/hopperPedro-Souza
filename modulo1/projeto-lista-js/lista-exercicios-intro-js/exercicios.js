// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = prompt("Qual a altura do retângulo?")
  let largura = prompt("Qual a largura do retângulo?")
  altura = Number(altura)
  largura = Number(largura)
  console.log(altura*largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = prompt("Em que ano estamos?")
  let anoNascimento = prompt("Em que ano você nasceu?")
  anoAtual = Number(anoAtual)
  anoNascimento = Number(anoNascimento)
  console.log(anoAtual-anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let IMC = peso/(altura*altura)
  return IMC
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual o seu nome?")
  const idade = prompt("Quantos anos você tem?")
  const correioEletronico = prompt("Qual o seu email?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${correioEletronico}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let vetor = []
  vetor[0] = prompt("Qual a sua cor favorita?")
  vetor[1] = prompt("E depois?")
  vetor[2] = prompt("Mais uma")
  console.log(vetor)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length == string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  troca = array[0]
  array[0] = retornaUltimoElemento(array)
  array[array.length - 1] = troca
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() == string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = prompt("Em que ano estamos?")
  let anoNascimento = prompt("Em que ano você nasceu?")
  let emissaoRG = prompt("Em que ano seu RG foi emitido?")
  let idade = Number(anoAtual) - Number(anoNascimento)
  console.log(idade)
  let idadeRG = Number(anoAtual) - Number(emissaoRG)
  console.log(idadeRG)
  caso1 = idade <= 20 && idadeRG >= 5
  console.log(caso1)
  caso2 = 20 <= idade && idade <= 50 && idadeRG >= 10
  console.log(caso2)
  caso3 = 50 <= idade && idadeRG >= 15
  console.log(caso3)
  let resultado = caso1 || caso2 || caso3
  console.log(resultado)
  return resultado
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  ano = Number(ano)
  let multiplo400 = ano%400 == 0
  Nmultiplo400 = !multiplo400
  let multiplo4 = ano%4 == 0
  let multiplo100 = ano%100 == 0
  let condicao1 = multiplo400
  let condicao2_Excessao = multiplo100 && Nmultiplo400
  let condicao2 = multiplo4 && !condicao2_Excessao
  let resultado = condicao1 || condicao2
  return resultado
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt("Você tem mais de 18 anos?")
  let escolaridade = prompt("Você possui ensino médio completo?")
  let disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  let condicao1 = idade == "sim"
  let condicao2 = escolaridade == "sim"
  let condicao3 = disponibilidade == "sim"
  let resultado = condicao1 && condicao2 && condicao3
  console.log(resultado)
}