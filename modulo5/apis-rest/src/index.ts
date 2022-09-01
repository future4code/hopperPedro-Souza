import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { User, users, USER_ROLE } from './data';

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

//Exercício 1
//a. Qual método HTTP você deve utilizar para isso?*
//    O método GET
//b. Como você indicaria a **entidade** que está sendo manipulada?*
//    Pelo path "/users"
app.get('/users',(req,res) => {
   let errorCode = 500
   try {
      res.status(200).send(users)
   } catch (error) {
      res.status(errorCode).send("Erro de serviço")
   }
})

//Exercício 2
//a. Como você passou os parâmetros de type para a requisição? Por quê?
//    Passei por query, pois era algo relacionado a vários usuários
//b. Você consegue pensar em um jeito de garantir que apenas types válidos sejam utilizados?
//    Sim, através de uma validação utilizando tipos pré definidos como 'ADMIN' e 'NORMAL'
app.get('/users/type',(req,res) => {
   let errorCode = 400
   try {
      const tipo = req.query.tipo as string

      if(tipo.toUpperCase() !== USER_ROLE.ADMIN && tipo.toUpperCase() !== USER_ROLE.NORMAL){
         errorCode = 422
         throw new Error("Tipo de  usuário inválido")
      }

      const resposta = users.filter((item) => {
         return item.type === tipo.toUpperCase()
      })
      
      res.status(200).send(resposta)
   } catch (error: any) {
      res.status(errorCode).send(error.message)
   }
})

//Exercício 3
//a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?*
//    Query ou Params
//b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum 
//usuário tenha sido encontrado.
app.get('/users/name', (req,res) => {
   let errorCode = 400
   try {
      const nome = req.query.nome as string

      if(!nome){
         errorCode = 422
         throw new Error("Nome não recebido")
      }

      const vetorBuscaNome = users.find((item) => {
         return item.name.toLowerCase() === nome.toLowerCase()
      })

      if(!vetorBuscaNome){
         errorCode = 422
         throw new Error("Nome não encontrado");
         
      }

      res.status(200).send(vetorBuscaNome)
   } catch (error: any) {
      res.status(errorCode).send(error.message)
   }
})

//Exercício 4
app.post('/users',(req,res) => {
   let errorCode = 400
   try {
      const {name, email, type, age} = req.body

      if(!name || !email || !type || !age){
         errorCode = 422
         throw new Error("Parâmetro não encontrado")
      }

      const id = Date.now()

      const newUser: User = {
         id,
         name,
         email,
         type,
         age
      }

      users.push(newUser)

      res.status(200).send(users)
   } catch (error:any) {
      res.status(errorCode).send(error.message)
   }
})