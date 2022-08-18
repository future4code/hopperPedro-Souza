// Letra a)
//let minhaString: string = 3
//Dá erro de tipo

// Letra b)
//let meuNumero: number = 3
//Podemos usar o UnionType
let meuNumero: number | string
meuNumero = 3
meuNumero = "Pedro"

//Letra d)
enum Cores {
    VERDE = "Verde",
    AZUL = "Azul",
    VERMELHO = "Vermelho"
}

// Letra c)
type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}
const obj1: pessoa = {
    nome: "Pedro",
    idade: 25,
    corFavorita: Cores.AZUL
}
const obj2: pessoa = {
    nome: "Patrícia",
    idade: 26,
    corFavorita: Cores.VERMELHO
}
