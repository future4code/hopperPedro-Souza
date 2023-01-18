// import { PetDatabase } from "../data/PetDatabase";
import { CustomError, InvalidDay } from "../error/customError";
import { dogWalking, DURACAO, STATUS, walkInputDTO } from "../model/DogModels";
// import { IdGenerator } from "../services/IdGenerator";
// import { LocalCurrentTime } from "../services/LocalCurrentTime";
// import { Recibo } from "../services/Recibo";
import { PetRepository } from "./PetRepository";
import { IIdGenerator, ILocalCurrentTime, IRecibo } from "./Ports";

export class PetBusiness{
    constructor(
        private petDatabase: PetRepository,
        private idGenerator: IIdGenerator,
        private localCurrentTime: ILocalCurrentTime,
        private recibo: IRecibo
    ){}

    public index = async (limit: number, offset: number): Promise<any> => {
        try{
            if(limit < 0 || offset < 0){
                throw new CustomError(400, "Parâmetros de paginação inválidos")
            }

            // const petDatabase = new PetDatabase()
            const result = await this.petDatabase.index(limit, offset)

            return result
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public show = async (id: string): Promise<any> => {
        try {
            if(!id){
                throw new CustomError(400, "Preencha o campo 'id'")
            }

            // const petDatabase = new PetDatabase()
            const result = await this.petDatabase.show(id)

            return result
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public createWalk = async (input: walkInputDTO) => {
        try {
            const {
                data,
                duracao,
                latitude,
                longitude,
                pets,
                inicio,
                fim
            } = input

            if(!data || !duracao || !latitude || !longitude || !pets || !inicio || !fim){
                throw new CustomError(400, "Preencha os campos: data, preco, duracao, latitude, longitude, pets, inicio e fim.")
            }

            // const idGenerator = new IdGenerator()
            const id: string = this.idGenerator.generateId()

            // const recibo = new Recibo()
            const preco: number = this.recibo.gerarRecibo(duracao, pets)

            const newWalk: dogWalking = {
                id,
                status: STATUS.STAND_BY,
                data,
                preco,
                duracao,
                latitude,
                longitude,
                pets,
                inicio,
                fim
            }
            
            // const petDatabase = new PetDatabase()
            await this.petDatabase.createWalk(newWalk)

        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public start_walk = async (id: string) => {
        try {
            if(!id){
                throw new CustomError(400, "id inválido")
            }

            // const localCurrentTime = new LocalCurrentTime()
            const time = this.localCurrentTime.generateTime()
    
            // const petDatabase = new PetDatabase()
            await this.petDatabase.start_walk(id, time)

        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public finish_walk = async (id: string) => {
        try {
            if(!id){
                throw new CustomError(400, "id inválido")
            }

            // const localCurrentTime = new LocalCurrentTime()
            const time = this.localCurrentTime.generateTime()
    
            // const petDatabase = new PetDatabase()
            await this.petDatabase.finish_walk(id, time)
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
}