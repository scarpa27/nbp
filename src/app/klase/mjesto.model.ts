export class Mjesto {
    'id': number;
    'drzava_id': number;
    'naziv': string;

    constructor(_id: number = 0,
                _drzava_id: number = 'drzava id',
                _naziv: string = 'naziv drzave') {
        this.id = _id;
        this.drzava_id = _drzava_id;
        this.naziv = _naziv;
    }
}
