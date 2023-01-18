import { IIdGenerator } from "../../../src/business/Ports";

export class IdGeneratorMock implements IIdGenerator {
    public generateId = jest.fn(() => {
        return "Mock IdGenerator"
    })
}