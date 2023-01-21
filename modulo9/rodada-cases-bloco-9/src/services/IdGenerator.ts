import { v4 } from "uuid"
import { IIdGenerator } from "../business/Ports"


export class IdGenerator implements IIdGenerator{
    public generateId = () => v4()
}