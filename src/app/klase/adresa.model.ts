export class Adresa {
    'id': number;
    'mjesto_id': number;
    'adresa': string;

    constructor(_id: number = 0,
                _mjesto_id: number = 'mjesto id',
                _adresa: string = 'ulica i broj') {
        this.id = _id;
        this.drzava_id = _drzava_id;
        this.adresa = _adresa;
    }
}
