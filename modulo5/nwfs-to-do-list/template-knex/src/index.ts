import express, {Request,Response} from "express";
import cors from "cors";
import connection from "./database/connection";
import { Tarefa, Usuario } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/user", async (req: Request,res: Response) => {
  let errorCode = 400
  try {
    const {name,nickname,email} = req.body

    if(!name || !nickname || !email){
      throw new Error("Passe o nome, nickname e email do usuário")
    }

    const novoUsuario: Usuario = {
      id: Number(Date.now()),
      name,
      nickname,
      email
    }

    await connection.raw(`
      INSERT INTO TodoListUser (id, name, nickname, email)
        VALUES ("${novoUsuario.id}", "${novoUsuario.name}", "${novoUsuario.nickname}", "${novoUsuario.email}");
    `)

    res.status(200).send("Usuário foi criado")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.get("/user/:id", async (req: Request,res: Response) => {
  let errorCode = 400
  try {
    const {id} = req.params

    if(!id){
      throw new Error("Informe o id do usuário")
    }

    const resultado = await connection.raw(`
      SELECT * FROM TodoListUser
        WHERE id = ${id}
    `)

    res.status(200).send(resultado[0])
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.put("/user/edit/:id", async (req: Request,res: Response) => {
  let errorCode = 400
  try {
    const {id} = req.params
    const name = req.body.name
    const nickname = req.body.nickname
    const email = req.body.email

    if(name){
      await connection.raw(`
        UPDATE TodoListUser
        SET name = "${name}"
        WHERE id = "${id}";
      `)
    }

    if(nickname){
      await connection.raw(`
        UPDATE TodoListUser
        SET nickname = "${nickname}"
        WHERE id = "${id}";
      `)
    }

    if(email){
      await connection.raw(`
        UPDATE TodoListUser
        SET email = "${email}"
        WHERE id = "${id}";
      `)
    }

    res.status(200).send("Usuário foi atualizado")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.post("/task", async (req: Request,res: Response) => {
  let errorCode = 400
  try {
    const {title,description,limitDate,creatorUserId} = req.body

    if(!title || !description || !limitDate || !creatorUserId){
      throw new Error("Passe o título, descrição e data limite e id do usuário da tarefa")
    }

    const novaTarefa: Tarefa = {
      id: Number(Date.now()),
      title,
      description,
      limitDate,
      creatorUserId
    }

    await connection.raw(`
      INSERT INTO TodoListTask (id, title, description, limit_Date, creator_User_Id)
        VALUES ("${novaTarefa.id}", "${novaTarefa.title}", "${novaTarefa.description}", "${novaTarefa.limitDate}", "${novaTarefa.creatorUserId}");
    `)

    res.status(200).send("Tarefa foi criada")
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.get("/task/:id", async (req: Request,res: Response) => {
  let errorCode = 400
  try {
    const {id} = req.params

    if(!id){
      throw new Error("Informe o id da tarefa")
    }

    const resultado = await connection.raw(`
      SELECT * FROM TodoListTask
        WHERE id = ${id}
    `)

    res.status(200).send(resultado[0])
  } catch (error) {
    res.status(errorCode).send(error.message)
  }
})

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});