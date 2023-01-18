import { IRecibo } from "../../../src/business/Ports";
import { DURACAO } from "../../../src/model/DogModels";

export class ReciboMock implements IRecibo {
    public gerarRecibo = jest.fn((duracao: DURACAO, pets: number) => {
        return 100
    })
}