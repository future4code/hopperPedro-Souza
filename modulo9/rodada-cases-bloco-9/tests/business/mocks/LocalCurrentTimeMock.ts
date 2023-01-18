import { ILocalCurrentTime } from "../../../src/business/Ports";

export class LocalCurrentTimeMock implements ILocalCurrentTime {
    public generateTime = jest.fn(() => {
        return "Mock Generate Time"
    })
}