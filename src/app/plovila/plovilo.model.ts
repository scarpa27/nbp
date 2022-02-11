export class Plovilo {
    'id': number;
    'ime': string;
    'vlasnik': string;
    'drzava': string;

    constructor(_id: number = 0, _ime: string = 'ime', _vlasnik: string = 'vlasnik', _drzava: string = 'drzava') {
        this.id = _id;
        this.ime = _ime;
        this.vlasnik = _vlasnik;
        this.drzava = _drzava;
    }
}
