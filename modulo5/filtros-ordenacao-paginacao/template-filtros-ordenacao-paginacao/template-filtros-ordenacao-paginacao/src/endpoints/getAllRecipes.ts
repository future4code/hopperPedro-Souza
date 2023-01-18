import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export async function getAllRecipes(
   req: Request,
   res: Response
): Promise<void> {
   let statusCode = 400
   try {
      let title = req.query.title as string
      let sort = req.query.sort  as string
      let order = req.query.order as string

      if(!title){
         title = "%"
      }

      if(!sort){
         sort = "title"
      }

      const result = await connection("aula49_recipes")
      .where("title","like",`%${title}%`)
      .orderBy(sort, order)
      .limit(1)
      .offset(0)

      if(result.length < 1){
         statusCode = 404
         throw new Error("Nenhuma receita encontrada")
      }

      const recipes = result.map(toRecipe)

      res.status(200).send(recipes)

   } catch (error:any) {
      res.status(statusCode).send(error.message)
   }
}

const toRecipe = (input: any): recipe => {
   return {
      id: input.id,
      title: input.title,
      description: input.description,
      userId: input.user_id,
      createdAt: input.created_at
   }
}