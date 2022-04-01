function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let ocorrencias = 0
  let mensagem
  for(let i of arrayDeNumeros){
    if(i == numeroEscolhido){
      ocorrencias++
    }
  }
  if(ocorrencias>0){
    mensagem = `O número ${numeroEscolhido} aparece ${ocorrencias}x`
  }else{
    mensagem = `Número não encontrado`
  }
  return mensagem
}
