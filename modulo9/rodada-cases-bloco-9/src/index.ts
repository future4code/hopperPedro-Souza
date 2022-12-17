import express, { Request, Response } from "express"
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta: 3003...")
})

app.get('/index', (req: Request, res: Response) => {
    res.status(200).send("Index")
})

app.get('/show', (req: Request, res: Response) => {
    res.status(200).send("Show")
})

app.post('/create', (req: Request, res: Response) => {
    res.status(200).send("Create")
})

app.put('/start_walk', (req: Request, res: Response) => {
    res.status(200).send("Start Walk")
})

app.put('/finish_walk', (req: Request, res: Response) => {
    res.status(200).send("Finish Walk")
})