import moment from "moment";

export class DurationTime {
    public localFormat = (data: string, inicio: string, fim: string) => {
            var dtChegada  = `${data} ${fim}`;
            var dtPartida = `${data} ${inicio}`;
          
            var ms = moment(dtChegada,"DD/MM/YYYY HH:mm:ss").diff(moment(dtPartida,"DD/MM/YYYY HH:mm:ss"));
            var d = moment.duration(ms);
            var s = Math.floor(d.asHours()) + moment.utc(ms).format(":mm:ss");

            return s
    }
}