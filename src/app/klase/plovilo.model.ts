export class Plovilo {
    'id': number;
    'naziv': string;
    'vlasnik': string;
    'drzava': string;

    'drzava_reg_id': number;
    'musterija_id': number;

    constructor(_id: number = 0,
                _naziv: string = 'naziv',
                _vlasnik: string = 'vlasnik',
                _drzava: string = 'drzava',
                _drzava_reg_id: number = 0,
                _musterija_id: number = 0) {
        this.id = _id;
        this.naziv = _naziv;
        this.vlasnik = _vlasnik;
        this.drzava = _drzava;

        this.drzava_reg_id = _drzava_reg_id;
        this.musterija_id = _musterija_id;
    }
}
