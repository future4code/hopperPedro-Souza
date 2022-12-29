import { Request, Response } from "express"
import { PetBusiness } from "../business/PetBusiness"
import { CustomError } from "../error/customError"
import { walkInputDTO } from "../model/DogModels"

export class PetController {
    public index = async (req: Request, res: Response) => {
        try {
            const {limit, offset} = req.body
            
            const petBusiness = new PetBusiness()
            const result = await petBusiness.index(limit, offset)

            res.status(200).send(result)
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
    
    public show = async (req: Request, res: Response) => {
        try {
            const id = req.body.id

            const petBusiness = new PetBusiness()
            const result = await petBusiness.show(id)

            res.status(200).send(result)
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
    
    public create = async (req: Request, res: Response) => {
        try {
            const {
                data,
                preco,
                duracao,
                latitude,
                longitude,
                pets,
                inicio,
                fim
            } = req.body

            const input: walkInputDTO = {
                data,
                duracao,
                latitude,
                longitude,
                pets,
                inicio,
                fim
            }

            const petBusiness = new PetBusiness()
            await petBusiness.createWalk(input)

            res.status(200).send("Created")
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
    
    public start_walk = async (req: Request, res: Response) => {
        try {
            const id = req.body.id

            const petBusiness = new PetBusiness()
            await petBusiness.start_walk(id)

            res.status(200).send("O passeio começou!")
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
        res.status(200).send("Start Walk")
    }
    
    public finish_walk = async (req: Request, res: Response) => {
        try {
            const id = req.body.id
            
            const petBusiness = new PetBusiness()
            await petBusiness.finish_walk(id)

            res.status(200).send("O passei acabou!")
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
}