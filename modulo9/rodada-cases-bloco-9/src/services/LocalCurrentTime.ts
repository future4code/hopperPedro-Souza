export class LocalCurrentTime {
    public generateTime = () => {
        const currentTime = new Date(Date.now())
        const localCurrentTime = currentTime.toLocaleTimeString()

        return localCurrentTime
    }
}