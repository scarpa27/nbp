export class Operater {
    'id': number;
    'ime': string;
    'prezime': string;
    'oib': string;
    'level': number;
    'sifra': string;
    'salt': string;

    constructor(_id: number = 0, _ime: string = 'ime', _prezime: string = 'prezime', _oib: string = "0000123456789", _ovlast_id = 0, _sifra = "", _salt = "") {
        this.id = _id;
        this.ime = _ime;
        this.prezime = _prezime;
        this.oib = _oib;
        this.level = _ovlast_id;
        this.sifra = _sifra;
        this.salt = _salt;
    }
}
