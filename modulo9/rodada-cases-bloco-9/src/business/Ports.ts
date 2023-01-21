import { DURACAO } from "../model/DogModels"

export interface IIdGenerator{
    generateId(): string
}

export interface ILocalCurrentTime{
    generateTime(): string
}

export interface IRecibo{
    gerarRecibo(duracao: DURACAO, pets: number): number
}