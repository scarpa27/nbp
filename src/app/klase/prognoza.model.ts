export class Prognoza {
    'opis': string;
    'temp': number;
    'real_feel': number;

    'v_brzina': number;
    'v_kut': number;
    'v_reful': number;


    constructor(_opis: string = "",
                _temp: number = 0,
                _real_feel: number = 0,
                _v_brzina: number = 0,
                _v_kut: number = 0,
                _v_reful: number = 0) {
        this.opis = _opis;
        this.temp = _temp;
        this.real_feel = _real_feel;
        this.v_brzina = _v_brzina;
        this.v_kut = _v_kut;
        this.v_reful = _v_reful;
    }
}
