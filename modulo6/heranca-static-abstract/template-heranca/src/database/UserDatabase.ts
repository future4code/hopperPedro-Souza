import { User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
    public static TABLE_USERS = "Labe_Users"
    public static TABLE_PRODUCTS = "Labe_Products"
    public static TABLE_PURCHASES = "Labe_Purchases"

    public async getAllUsers() {
        const result = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .select()

        return result
    }

    public async createUser(user: User){
        await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert({
            id: user.getId(),
            email: user.getEmail(),
            password: user.getPassword()
        })
    }

    public async getUserById(id: string){

        const [result] = await BaseDatabase.connection.raw(`
        SELECT
            ${UserDatabase.TABLE_USERS}.email,
            ${UserDatabase.TABLE_PRODUCTS}.name AS product_name,
            ${UserDatabase.TABLE_PRODUCTS}.price AS product_price,
            ${UserDatabase.TABLE_PURCHASES}.quantity AS product_quantity,
            ${UserDatabase.TABLE_PURCHASES}.total_price
        FROM ${UserDatabase.TABLE_PURCHASES}
        JOIN ${UserDatabase.TABLE_USERS}
        ON ${UserDatabase.TABLE_PURCHASES}.user_id = ${UserDatabase.TABLE_USERS}.id
        JOIN ${UserDatabase.TABLE_PRODUCTS}
        ON ${UserDatabase.TABLE_PURCHASES}.product_id = ${UserDatabase.TABLE_PRODUCTS}.id
        WHERE ${UserDatabase.TABLE_PURCHASES}.user_id = ${id};
        `)

        return result
    }
}