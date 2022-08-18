//Letra a) e b)
function obterEstatisticas(numeros: number[])
    : Object {

    const numerosOrdenados: number[] = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//Letra c)
type amostraDeIdades = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => Object
}

const amostraDeIdades = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: obterEstatisticas([21, 18, 65, 44, 15, 18])
}