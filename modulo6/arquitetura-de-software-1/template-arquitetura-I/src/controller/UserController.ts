import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {

   public getAll = async (
      req: Request,
      res: Response
   ) => {
      try {
         const instUserBusiness = new UserBusiness()

         const result = await instUserBusiness.getAll()

         res.status(201).send( result )
      } catch (error: any) {
         res.status(400).send(error.message)
      }
   }

   public createUser = async (
      req: Request,
      res: Response
   ) => {
      try {
         const { name, email, password } = req.body

         const input = {
            name,
            email,
            password
         }

         const instUserBusiness = new UserBusiness()

         await instUserBusiness.createUser(input)

         res.status(201).send({ message: "Usuário criado!" })
      } catch (error: any) {
         res.status(400).send(error.message)
      }
   }

   public deleteUser = async (
      req: Request,
      res: Response
   ) => {
      try {
         const id = req.params.id

         const instUserBusiness = new UserBusiness()

         await instUserBusiness.deleteUser(id)

         res.status(201).send({ message: "Usuário excluído." })
      } catch (error: any) {
         res.status(400).send(error.message)
      }
   }

}