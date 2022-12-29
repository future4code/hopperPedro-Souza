export enum STATUS {
    STAND_BY = "STAND_BY",
    WALKNG = "WALKING",
    DONE = "DONE"
}

export enum DURACAO {
    TRINTA = 30,
    SESSENTA = 60
}

export interface dogWalking {
    id: string;
    status: STATUS;
    data: string;
    preco: number;
    duracao: DURACAO;
    latitude: string;
    longitude: string;
    pets: number;
    inicio: string;
    fim: string
}

export interface walkInputDTO {
    data: string;
    duracao: DURACAO;
    latitude: string;
    longitude: string;
    pets: number;
    inicio: string;
    fim: string
}