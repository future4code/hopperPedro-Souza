/* Exercícios de Interpretação de Código
1.
a. Será impresso por iteração cada item do array mapeado
"usuário", sendo primeiro o item do array, seguido pelo índex
do item de cada iteração e o array completo.

2.
a. Será impresso um array com os nomes de cada usuário.

3.
a. Será impresso o array "filho" do array usuários com a
condição de que não há usuários com apelido "Chijo".
*/

// Exercícios de Escrita de Código
/* //1.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

// a.
let newArray = pets.map(function(item,index,array){
    return item.nome
})
console.log(newArray)

// b.
let salsichasOnly = pets.filter(function(item,index,array){
    return item.raca === "Salsicha"
})
console.log(salsichasOnly)

// c.
let poodlesOnly = pets.filter(function(item,index,array){
    return item.raca === "Poodle"
})
let mensagem = poodlesOnly.map(function(item,index,array){
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
})
*/

/* // 2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a.
let arrayNome = produtos.map(function(item,index,array){
    return item.nome
})
console.log(arrayNome)

// b.
let arrayNomePreco = produtos.map(function(item,index,array){
    return {nome: item.nome, preco: item.preco * (95/100)}
})
console.log(arrayNomePreco)

// c.
let arrayBebidas = produtos.filter(function(item,index,array){
    return item.categoria === "Bebidas"
})
console.log(arrayBebidas)

// d.
let arrayYpe = produtos.filter(function(item,index,array){
    if(item.nome.search("Ypê") > -1){
        return item.nome
    }
})
console.log(arrayYpe)

// e.
let objetosYpe = produtos.filter(function(item,index,array){
    if(item.nome.search("Ypê") > -1){
        return item
    }
})
let arrayMensagemYpe = objetosYpe.map(function(item,index,array){
    console.log(`Compre ${item.nome} por ${item.preco}`)
}) */



// Desafios

// // 1.
// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
// ]

// // a.
// let arrayNome = pokemons.map(function(item,index,array){
//     return item.nome
// })

// let arraySortNome = arrayNome.sort()

// console.log(arraySortNome)

// // b.
// let arrayTipo = pokemons.map(function(item,index,array){
//     return item.tipo
// })

// let arrayTipoSR = []

// for(var i=0; i<arrayTipo.length; i++){
//     if(arrayTipoSR.indexOf(arrayTipo[i]) === -1){
//         arrayTipoSR.push(arrayTipo[i])    
//     }
// }

// console.log(arrayTipoSR)