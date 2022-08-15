function presentation(
    name: string,
    birthDate: string
): string{
    const dia: string = birthDate.slice(0,2)
    const mes: string = birthDate.slice(3,5)
    const ano: string = birthDate.slice(6,10)
    const message: string = `Olá me chamo ${name}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`
    return message
}

console.log(presentation("Pedro", "06/05/1997"))