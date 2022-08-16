import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.listen(3003,() => {
    console.log("Server is running in http://localhost:3003")
})

//Exercício 1
app.get('/',(req,res) => {
    res.status(200).send('Hello from Express!')
})

//Exercício 2
type UserInfo = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
}

//Exercício 3
var users: UserInfo[] = [
    {
        id: 1,
        name: "Pedro",
        phone: "123",
        email: "pedro@email.com",
        website: "www.pedro.com"
    },
    {
        id: 2,
        name: "Patricia",
        phone: "456",
        email: "patricia@email.com",
        website: "www.patricia.com"
    },
    {
        id: 3,
        name: "Ana",
        phone: "789",
        email: "ana@email.com",
        website: "www.ana.com"
    }
]

//Exercício 4
app.get('/users',(req,res) => {
    res.status(200).send(users)
})

//Exercício 5
type PostInfo = {
    id: number,
    title: string,
    body: string,
    userId: number
}

//Exercício 6
//É melhor criar o array de posts separado dos usuários para tornar
//mais prático o código de resposta às requisições
var posts: PostInfo[] = [
    {
        id: 1,
        title: "Rouge",
        body: "acererrê rá derrê",
        userId: 1
    },
    {
        id: 2,
        title: "OLX",
        body: "desapega, desapega, olx!",
        userId: 3
    },
    {
        id: 3,
        title: "Risada",
        body: "hahaahahha",
        userId: 3
    },
    {
        id: 4,
        title: "Apresentação",
        body: "olá",
        userId: 2
    },
]

//Exercício 7
app.get('/posts',(req,res) => {
    res.status(200).send(posts)
})

//Exercício 8
app.get('/posts/:id',(req,res) => {
    const userPosts: PostInfo[] = posts.filter((item) => {
        return Number(req.params.id) === item.userId
    })
    res.status(200).send(userPosts)
})