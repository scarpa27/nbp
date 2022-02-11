export class Adresa {
    'id': number;
    'mjesto_id': number;
    'adresa': string;

    constructor(_id: number = 0,
                _mjesto_id: number = 0,
                _adresa: string = 'ulica i broj') {
        this.id = _id;
        this.mjesto_id = _mjesto_id;
        this.adresa = _adresa;
    }
}
