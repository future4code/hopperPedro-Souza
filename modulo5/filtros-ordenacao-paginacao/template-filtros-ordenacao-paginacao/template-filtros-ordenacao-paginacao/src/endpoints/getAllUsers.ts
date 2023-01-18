import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
    //    const users = await selectAllUsers()
        let nome = req.query.name as string
        let tipo = req.query.type as string
        let sort = req.query.sort as string
        let order = req.query.order as string
        let limite = 5
        let inicio = limite*(Number(req.query.pagina) - 1)

        if(!nome){
            nome = "%"
        }

        if(!tipo){
            tipo = "%"
        }
        
        if(!sort){
            sort = "email"
        }

        if(!order){
            order = "ASC"
        }

        if(!inicio){
            inicio = 0
        }

        const users = await connection("aula48_exercicio")
        .where("name","like",`%${nome}%`)
        .andWhere("type","like",`%${tipo}%`)
        .orderBy(sort,order)
        .limit(limite)
        .offset(inicio)
        
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

//  export default async function selectAllUsers():Promise<any> {
//     const result = await connection("aula48_exercicio")
//     // const result = await connection.raw(`
//     //    SELECT id, name, email, type
//     //    FROM aula48_exercicio;
//     // `)
 
//     return result[0]
//  }