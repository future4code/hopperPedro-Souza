```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
  let fixo = 2000
  let comissao = qtdeCarrosVendidos*100 + 0.05*valorTotalVendas
  let salario = fixo + comissao
  return salario
}
```