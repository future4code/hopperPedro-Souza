import { CustomError } from "../error/customError";
import { dogWalking, STATUS } from "../model/DogModels";
import { DurationTime } from "./DurationTime";
import { BaseDatabase } from "./BaseDatabase";
import { PetRepository } from "../business/PetRepository";
// import moment from "moment";

export class PetDatabase extends BaseDatabase implements PetRepository{
    public index = async (limit: number, offset: number): Promise<any> => {
        try {
            const result = await PetDatabase.connection("Dog_Walking")
            .select()
            .limit(limit)
            .offset(offset)

            return result
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public show = async (id: string): Promise<any> => {
        try {
            const [result1] = await PetDatabase.connection("Dog_Walking")
            .where({id: id})
            .select('data')

            var data = result1.data
            data = data.replace('-', '/')

            const [result2] = await PetDatabase.connection("Dog_Walking")
            .where({id: id})
            .select('inicio')

            const inicio = result2.inicio

            const [result3] = await PetDatabase.connection("Dog_Walking")
            .where({id: id})
            .select('fim')

            const fim = result3.fim

            const durationTime = new DurationTime()
            const duracaoReal = durationTime.localFormat(data, inicio, fim)

            return duracaoReal
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public createWalk = async (newWalk: dogWalking) => {
        try {
            await PetDatabase.connection("Dog_Walking").insert({
                id: newWalk.id,
                status: newWalk.status,
                data: newWalk.data,
                preco: newWalk.preco,
                duracao: newWalk.duracao,
                latitude: newWalk.latitude,
                longitude: newWalk.longitude,
                pets: newWalk.pets,
                inicio: newWalk.inicio,
                fim: newWalk.fim
            })
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public start_walk = async (id: string, localCurrentTime: string) => {
        try {
            await PetDatabase.connection("Dog_Walking")
            .where({id: id})
            .update({
                status: STATUS.WALKNG,
                inicio: localCurrentTime
            })
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public finish_walk = async (id: string, localCurrentTime: string) => {
        try {
            await PetDatabase.connection("Dog_Walking")
            .where({id: id})
            .update({
                status: STATUS.DONE,
                fim: localCurrentTime
            })
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
}