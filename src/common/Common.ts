import moment from 'moment';

export class Common {

    static tarihDegistir(date?: Date): string {
        return moment(date).format("DD/MM/YYYY HH:mm:ss");
    }
}
