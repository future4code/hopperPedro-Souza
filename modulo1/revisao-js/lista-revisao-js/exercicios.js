// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let arrayInvertido = []
    for(let i of array){
        arrayInvertido[(array.length - 1) - array.indexOf(i)] = i
    }
    return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   return array.sort(function(a,b){
        if(a<b){
            return -1
        }else if(a > b){
            return 1
        }else{
            return 0
        }
    })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPares = []
    for(let i of array){
        if(i%2 == 0){
            arrayPares.push(i)
        }
    }
    return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayPares = []
    for(let i of array){
        if(i%2 == 0){
            arrayPares.push(i**2)
        }
    }
    return arrayPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = array[0]
    for(let j=0; j<array.length; j++){
        if(maiorNumero < array[j]){
            maiorNumero = array[j]
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let objetoDoisNumeros = {maiorNumero: 0,
    maiorDivisivelPorMenor: false, diferenca: 0}
    if(num1 > num2){
        objetoDoisNumeros.maiorNumero = num1
        objetoDoisNumeros.maiorDivisivelPorMenor = num1%num2 == 0
        objetoDoisNumeros.diferenca = num1 - num2
    }else{
        objetoDoisNumeros.maiorNumero = num2
        objetoDoisNumeros.maiorDivisivelPorMenor = num2%num1 == 0
        objetoDoisNumeros.diferenca = num2 - num1
    }
    return objetoDoisNumeros
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let arrayDeZeroAteN = []
    for(let i=0; i<2*n; i++){
        if(i%2 == 0){
            arrayDeZeroAteN.push(i)
        }
    }
    return arrayDeZeroAteN
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let resultado = ""
    if(ladoA == ladoB && ladoA == ladoC){
        resultado = "Equilátero"
    }else if(ladoA != ladoB && ladoA != ladoC && ladoB != ladoC){
        resultado = "Escaleno"
    }else{
        resultado = "Isósceles"
    }
    return resultado
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let arrayOrdenado = retornaArrayOrdenado(array)
    let resultado = []
    resultado.push(arrayOrdenado[arrayOrdenado.length-2])
    resultado.push(arrayOrdenado[1])
    return resultado
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let mensagem = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`
    return mensagem
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let pessoa2 = {...pessoa, nome: "ANÔNIMO"}
    return pessoa2
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasAutorizadas = []
    pessoasAutorizadas = pessoas.filter(function(item,index,array){
        if(item.idade > 14 && item.idade < 60 && item.altura >= 1.5){
            return item
        }
    })
    return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = []
    pessoasNaoAutorizadas = pessoas.filter(function(item,index,array){
        if(item.idade <= 14 || item.idade >= 60 || item.altura < 1.5){
            return item
        }
    })
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas = contas.map(function(item,index,array){
        item.saldoTotal = item.saldoTotal - somatorioArray(item.compras)
        item.compras = []
        return item
    })
    return contas
}
function somatorioArray(array){
    let somatorio = 0
    for(let i of array){
        somatorio += i
    }
    return somatorio
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    nomePacientes = consultas.map(function(item,index,array){
        return item.nome
    })
    nomePacientesOrdenado = nomePacientes.sort()
    for(let i=0; i<consultas.length; i++){
        for(let j=0; j<nomePacientesOrdenado.length; j++){
            if(consultas[i].nome == nomePacientesOrdenado[j]){
                tmp = consultas[j]
                consultas[j] = consultas[i]
                consultas[i] = tmp
            }
        }
    }
    return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}