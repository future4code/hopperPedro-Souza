import express, { Request, Response, Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { AdicionarSaldo, Conta, contas, RealizarPagamento } from "./data";


const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

app.post('/contas',(req: Request, res: Response) => {
    let errorCode = 400
    try {
        const {nome, cpf, age} = req.body
        contas.push({
            nome,
            cpf,
            age,
            saldo: 0,
            extrato: []
        })
        res.status(200).send("Conta cadastrada")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.get('/contas',(req: Request, res: Response) => {
    let errorCode = 400
    try {
        res.status(200).send(contas)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.get('/contas/saldo',(req: Request,res: Response) => {
    let errorCode = 400
    try {
        const cpfPesquisado = Number(req.body.cpf)
        const contaEncontrada = contas.filter((item) => {
            return item.cpf === cpfPesquisado
        })

        if(!contaEncontrada){
            errorCode = 422
            throw new Error("Usuário não encontrado")
        }

        if(contaEncontrada.length !== 1){
            errorCode = 500
            throw new Error("Mais de um usuário encontrado")
        }
        
        const saldoEncontrado = contaEncontrada[0].saldo
        res.status(200).send(`R$${saldoEncontrado}`)
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.put('/contas/deposito',(req: Request, res: Response) => {
    let errorCode = 400
    try {
        const {cpf, valor, data, descricao} = req.body
        const buscaConta = contas.filter((item) => {
            return item.cpf === cpf
        })

        if(buscaConta.length === 0){
            errorCode = 422
            throw new Error("Usuário não encontrado")
        }

        AdicionarSaldo(cpf,valor,data,descricao)
        res.status(200).send("Depósito feito com sucesso")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.put('/contas/pagamento',(req: Request, res: Response) => {
    let errorCode = 400
    try {
        const {cpf, valor, data, descricao} = req.body
        const buscaConta = contas.filter((item) => {
            return item.cpf === cpf
        })

        if(buscaConta.length === 0){
            errorCode = 422
            throw new Error("Usuário não encontrado")
        }

        RealizarPagamento(cpf,valor,data,descricao)
        res.status(200).send("Pagamento feito com sucesso")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.put('/contas/transferencia',(req: Request, res: Response) => {
    let errorCode = 400
    try {
        const {cpfRemetente, cpfDestinatario, valor, data, descricao} = req.body
        const buscaContaRemetente = contas.filter((item) => {
            return item.cpf === cpfRemetente
        })

        const buscaContaDestinatario = contas.filter((item) => {
            return item.cpf === cpfDestinatario
        })

        if(
            buscaContaRemetente.length === 0 
            || 
            buscaContaDestinatario.length === 0
        ){
            errorCode = 422
            throw new Error("Um dos usuários não encontrado")
        }

        RealizarPagamento(cpfRemetente,valor,data,descricao)
        AdicionarSaldo(cpfDestinatario,valor,data,descricao)
        res.status(200).send("Transferência realizada com sucesso")
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})