import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness {

   public getAll = async () => {
      try {
         const instUserDataBase = new UserDatabase()

         const result = await instUserDataBase.getAll()

         return result

      } catch (error: any) {
         throw new Error(error.message)
      }
   }

   public createUser = async (
      input: any
   ) => {
      try {
         const { name, email, password } = input

         if (
            !name ||
            !email ||
            !password
         ) {
            throw new Error('Preencha os campos "name", "email" e "password"')
         }

         const id: string = Date.now().toString()

         const instUserDataBase = new UserDatabase()

         await instUserDataBase.insertUser({
            id,
            name,
            email,
            password
         })



      } catch (error: any) {
         throw new Error(error.message)
      }
   }

   public deleteUser = async (
      id: any
   ) => {
      try {
         if (!id) {
            throw new Error('Preencha os campo "id"')
         }

         const instUserDataBase = new UserDatabase()

         await instUserDataBase.deleteUser(id)

      } catch (error: any) {
         throw new Error(error.message)
      }
   }

}