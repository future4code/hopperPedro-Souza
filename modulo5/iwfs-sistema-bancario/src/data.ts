export type Transacao = {
    valor: number,
    data: string,
    descricao: string
}

export type Conta = {
    nome: string,
    cpf: number,
    age: number,
    saldo: number,
    extrato: Transacao[]
}

export let contas: Conta[] = [
    {
        nome: "Pedro",
        cpf: Date.now(),
        age: 25,
        saldo: 110,
        extrato: []
    },
    {
        nome: "Ana",
        cpf: Date.now() + 1,
        age: 57,
        saldo: 8005,
        extrato: []
    },
    {
        nome: "Patricia",
        cpf: Date.now() + 2,
        age: 27,
        saldo: 560,
        extrato: []
    }
]

export const AdicionarSaldo = (
    cpf: number,
    valor: number,
    data: string, 
    descricao: string
) => {
    contas = contas.map((conta) => {
        if(conta.cpf === cpf){
            conta.extrato.push({
                valor,
                data,
                descricao
            })
            return {
                ...conta,
                saldo: conta.saldo + valor
            }
        }else{
            return conta
        }
    })
}

export const RealizarPagamento = (
    cpf: number,
    valor: number,
    data: string, 
    descricao: string
) => {
    contas = contas.map((conta) => {
        if(conta.cpf === cpf){
            conta.extrato.push({
                valor,
                data,
                descricao
            })
            return {
                ...conta,
                saldo: conta.saldo - valor
            }
        }else{
            return conta
        }
    })
}