import { ILocalCurrentTime } from "../business/Ports"

export class LocalCurrentTime implements ILocalCurrentTime{
    public generateTime = () => {
        const currentTime = new Date(Date.now())
        const localCurrentTime = currentTime.toLocaleTimeString()

        return localCurrentTime
    }
}