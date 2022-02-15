import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {join} from '@fireflysemantics/join';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    readonly apiRoot = join(environment.API_URL, '/api');
    readonly authRoot = join(environment.API_URL, '/auth');

    constructor(private http: HttpClient) {
    }


    getPlovila() {
        return this.http.get(join(this.apiRoot, "plovilo"));
    }

    getPlovilo(id: number) {
        return this.http.get(join(this.apiRoot, "plovilo", id.toString()));
    }

    postPlovilo(_drzava_reg_id: number, _musterija_id: number, _naziv: string) {
        return this.http.post(join(this.apiRoot, "plovilo"), {
            drzava_reg_id: _drzava_reg_id,
            musterija_id: _musterija_id,
            naziv: _naziv
        });
    }

    putPlovilo(_drzava_reg_id: number, _musterija_id: number, _naziv: string, _id: number) {
        return this.http.put(join(this.apiRoot, "plovilo", _id.toString()), {drzava_reg_id: _drzava_reg_id, musterija_id: _musterija_id, naziv: _naziv, id: _id
        });
    }

    deletePlovilo(_id: number) {
        return this.http.delete(join(this.apiRoot, "plovilo", _id.toString()));
    }


    getDrzave() {
        return this.http.get(join(this.apiRoot, "drzava"));
    }

    getDrzava(_id: number) {
        return this.http.get(join(this.apiRoot, "drzava", _id.toString()))
    }

    postDrzava(_drzava: string) {
        return this.http.post(join(this.apiRoot, "drzava"), {drzava: _drzava});
    }

    putDrzava(_id: number, _naziv: string) {
        return this.http.put(join(this.apiRoot, "drzava", _id.toString()), {id: _id, drzava: _naziv});
    }

    deleteDrzava(_id: number) {
        return this.http.delete(join(this.apiRoot, "drzava", _id.toString()));
    }


    getMjesta() {
        return this.http.get(join(this.apiRoot, "mjesto"))
    }

    getMjesto(_id: number) {
        return this.http.get(join(this.apiRoot, "mjesto", _id.toString()))
    }

    postMjesto(_naziv: string, _drzava_id: number) {
        return this.http.post(join(this.apiRoot, "mjesto"), {naziv: _naziv, drzava_id: _drzava_id});
    }

    putMjesto(_naziv: string, _drzava_id: number, _id: number) {
        return this.http.put(join(this.apiRoot, "mjesto", _id.toString()), {
            naziv: _naziv,
            drzava_id: _drzava_id,
            id: _id
        });
    }

    deleteMjesto(_id: number) {
        return this.http.delete(join(this.apiRoot, "mjesto", _id.toString()));
    }


    getAdrese() {
        return this.http.get(join(this.apiRoot, "adresa"));
    }

    getAdresa(_id: number) {
        return this.http.get(join(this.apiRoot, "adresa", _id.toString()));
    }

    postAdresa(_mjesto_id: number, _adresa: string) {
        return this.http.post(join(this.apiRoot, "adresa"), {mjesto_id: _mjesto_id, adresa: _adresa});
    }

    putAdresa(_mjesto_id: number, _adresa: string, _id: number) {
        return this.http.put(join(this.apiRoot, "adresa", _id.toString()), {
            mjesto_id: _mjesto_id,
            adresa: _adresa,
            id: _id
        });
    }

    deleteAdresa(_id: number) {
        return this.http.delete(join(this.apiRoot, "adresa", _id.toString()));
    }


    getMusterije() {
        return this.http.get(join(this.apiRoot, "vlasnik"));
    }

    getMusterija(_id: number) {
        return this.http.get(join(this.apiRoot, "vlasnik", _id.toString()));
    }

    postMusterija(_ime: string, _prezime: string, _adresa_id: number, _oib: string) {
        return this.http.post(join(this.apiRoot, "vlasnik"), {
            ime: _ime,
            prezime: _prezime,
            adresa_id: _adresa_id,
            oib: _oib
        });
    }

    putMusterija(_ime: string, _prezime: string, _adresa_id: number, _oib: string, _id: number) {
        return this.http.put(join(this.apiRoot, "vlasnik", _id.toString()), {
            ime: _ime,
            prezime: _prezime,
            adresa_id: _adresa_id,
            oib: _oib
        });
    }

    deleteMusterija(_id: number) {
        return this.http.delete(join(this.apiRoot, "vlasnik", _id.toString()));
    }

    postCred(_id: string, _pass: string) {
        console.log("data service post cred");
        console.log(_id);
        console.log(_pass);
        return this.http.post(join(this.authRoot), {id: _id, pass: _pass});
    }

    getJa() {
        return this.http.get(join(this.apiRoot,"ja"));
    }

    getPrognoza() {
        return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=Makarska,hr&APPID=70de1ec8044ff7c93174921dffc94fd5&units=metric&lang=hr");
    }



}
