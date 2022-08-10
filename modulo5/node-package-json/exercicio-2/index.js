// Exercício 2
// Crie uma aplicação Node que recebe uma string representando 
// uma operação matemática e dois valores numéricos. 
// O retorno deverá ser o resultado da operação selecionada 
// utilizando os 2 valores fornecidos.

let resultado = 0
if(process.argv[2].toLowerCase() === "add"){
    resultado = Number(process.argv[3]) + Number(process.argv[4])
}else if(process.argv[2].toLowerCase() === "sub"){
    resultado = Number(process.argv[3]) - Number(process.argv[4])
}else if(process.argv[2].toLowerCase() === "mult"){
    resultado = Number(process.argv[3])*Number(process.argv[4])
}else if(process.argv[2].toLowerCase() === "div"){
    resultado = Number(process.argv[3])/Number(process.argv[4])
}
console.log('\x1b[32m%s\x1b[0m', `O resultado é ${resultado}`)