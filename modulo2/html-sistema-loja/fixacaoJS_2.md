function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let custo = 0
  if(quantidade<12){
    custo = 1.3*quantidade
  }else{
    custo = quantidade
  }
  return custo
}