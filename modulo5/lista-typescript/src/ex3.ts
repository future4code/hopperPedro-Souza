enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function stream(
    name: string,
    age: number,
    genre: GENERO,
    rating?: number 
): any{
    const filme = {
        nome: name,
        ano: age,
        genero: genre,
        pontuacao: rating
    }
    return filme
}

console.log(stream("Duna",2021,GENERO.ACAO,74))