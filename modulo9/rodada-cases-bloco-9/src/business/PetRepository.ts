import { dogWalking } from "../model/DogModels"

export interface PetRepository{
    index (limit: number, offset: number): Promise<any>

    show (id: string): Promise<any>

    createWalk (newWalk: dogWalking): void

    start_walk (id: string, localCurrentTime: string): void

    finish_walk (id: string, localCurrentTime: string): void
}