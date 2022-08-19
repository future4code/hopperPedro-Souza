import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

//Exercicio 1
app.get('/ping', (req, res) => {
    res.status(200).send("Pong! 🏓")
})

//Exercicio 2
type Tarefa = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

//Exercicio 3
var tarefas: Tarefa[] = [
    {
        "userId": 1,
        "id": 19,
        "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
        "completed": true
    },
    {
        "userId": 1,
        "id": 20,
        "title": "ullam nobis libero sapiente ad optio sint",
        "completed": true
    },
    {
        "userId": 2,
        "id": 21,
        "title": "suscipit repellat esse quibusdam voluptatem incidunt",
        "completed": false
    },
    {
        "userId": 2,
        "id": 22,
        "title": "distinctio vitae autem nihil ut molestias quo",
        "completed": true
    },
    {
        "userId": 3,
        "id": 59,
        "title": "perspiciatis velit id laborum placeat iusto et aliquam odio",
        "completed": false
    },
    {
        "userId": 3,
        "id": 60,
        "title": "et sequi qui architecto ut adipisci",
        "completed": true
    },
    {
        "userId": 4,
        "id": 61,
        "title": "odit optio omnis qui sunt",
        "completed": true
    },
    {
        "userId": 4,
        "id": 62,
        "title": "et placeat et tempore aspernatur sint numquam",
        "completed": false
    }
]

//Exercicio 4
app.get('/tarefas', (req, res) => {
    if(req.query.status === 'false'){
        const tarefasIncompletas = tarefas.filter((item: Tarefa) => {
            return item.completed === false
        })

        res.status(200).send(tarefasIncompletas)
    }else if(req.query.status === 'true'){
        const tarefasCompletas = tarefas.filter((item: Tarefa) => {
            return item.completed === true
        })

        res.status(200).send(tarefasCompletas)
    }else{
        res.status(200).send(tarefas)
    }
})

//Exercicio 5
app.post('/tarefas', (req, res) => {
    if (typeof req.body === typeof tarefas){
        const novasTarefas = tarefas.concat(req.body)
        tarefas = novasTarefas
        res.status(200).send(tarefas)
    }
    else{
        console.log("Deu erro")
    }
})

//Exercicio 6
app.put('/tarefas/mudarStatus', (req, res) => {
    const novasTarefas = tarefas.map((item) => {
        return {...item, completed: !item.completed}
    })
    tarefas = novasTarefas
    res.status(200).send(tarefas)
})

//Exercicio 7
app.delete('/tarefas/:id', (req, res) => {
    const novasTarefas = tarefas.filter((item) => {
        return item.id !== Number(req.params.id)
    })
    tarefas = novasTarefas
    res.status(200).send(tarefas)
})

//Exercicio 8
app.get('/tarefas/:userId', (req, res) => {
    const userTarefas = tarefas.filter((item) => {
        return item.userId === Number(req.params.userId)
    })
    res.status(200).send(userTarefas)
})