const clientes: Object[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function negativados(
    clientes: any[]
): Object[]{
    const somaDebitos: any[] = clientes.map((item) => {
        let soma: number = 0
        for (const iterator of item.debitos) {
            soma += iterator
        }
        const novoSaldo: number = item.saldoTotal - soma
        return {cliente: item.cliente, saldoTotal: novoSaldo}
    })
    const clientesNegativados: Object[] = somaDebitos.filter((item) => {
        return item.saldoTotal < 0
    })
    return clientesNegativados
}

console.log(negativados(clientes))