import { DURACAO } from "../model/DogModels";

export class Recibo {
    public gerarRecibo = (duracao: DURACAO, pets: number): number => {
        if(duracao === 30){
            const preco = 25 + (pets - 1)*15
            return preco
        }else{
            const preco = 35 + (pets - 1)*20
            return preco
        }
    }
}