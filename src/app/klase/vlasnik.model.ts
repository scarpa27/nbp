export class Vlasnik {
    'id': number;
    'concat': string;
    'ime': string;
    'prezime': string;
    'adresa_id': number;
    'oib': string

    constructor(_id: number = 0, _ime: string = 'ime', _prezime: string = 'prezime', _adresa_id: number = 0, _oib: string = "0000123456789") {
        this.id = _id;
        this.ime = _ime;
        this.prezime = _prezime;
        this.concat = _ime+" "+_prezime;
        this.adresa_id = _adresa_id;
        this.oib = _oib
    }
}
