import express from 'express'
import cors from 'cors'
import { addProduto, produtos, putPrice, rmProduto } from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando...")
})

app.get('/test',(req,res) => {
    res.status(200).send("Funciona!")
})

app.post('/produtos',(req,res) => {
    try {
        const nomeRecebido: string = req.body.name
        const precoRecebido: number = req.body.price

        if(!nomeRecebido){ throw new Error("nome não encontrado") }
        if(!precoRecebido){ throw new Error("preço não encontrado") }

        if(nomeRecebido !== `${nomeRecebido}`){throw new Error("nome inválido")}
        if(precoRecebido !== Number(precoRecebido) || precoRecebido <= 0){
            throw new Error("preço inválido")
        }

        res.status(200).send(addProduto(req.body))
    } catch (error: any) {
        res.send(error.message)
    }
})

app.get('/produtos',(req,res) => {
    res.status(200).send(produtos)
})

app.put('/produtos/price/:id',(req,res) => {
    res.status(200).send(putPrice(req.params.id,req.body.price))
})

app.delete('/produtos/:id',(req,res) => {
    res.status(200).send(rmProduto(req.params.id))
})