import {Injectable} from '@angular/core';
import {Plovilo} from "../klase/plovilo.model";
import {ApiService} from "./api.service";
import {BehaviorSubject} from "rxjs";
import {Drzava} from "../klase/drzava.model";
import {Vlasnik} from "../klase/vlasnik.model";
import {Mjesto} from "../klase/mjesto.model";
import {Adresa} from "../klase/adresa.model";
import {Prognoza} from "../klase/prognoza.model";

@Injectable({
    providedIn: 'root'
})
export class ResponseService {

    constructor(private apiService: ApiService) {
    }

    getPlovilaAPI() {
        let sub = new BehaviorSubject<Plovilo[]>([]);
        this.apiService.getPlovila().subscribe(a => {
            sub.next(a["resp"][0]);
        });
        return sub;
    }

    getPloviloAPI(_id: number) {
        let sub = new BehaviorSubject<Plovilo>(new Plovilo());
        this.apiService.getPlovilo(_id).subscribe(a => {
            sub.next(a["resp"][0][0]);
        });
        return sub;
    }

    postPloviloAPI(_drzava_reg_id: number, _musterija_id: number, _naziv: string) {
        return this.apiService.postPlovilo(_drzava_reg_id, _musterija_id, _naziv).subscribe(() => window.close());
    }

    putPloviloAPI(_drzava_reg_id: number, _musterija_id: number, _naziv: string, _id: number) {
        return this.apiService.putPlovilo(_drzava_reg_id, _musterija_id, _naziv, _id).subscribe(() => window.close());
    }

    deletePloviloAPI(_id: number) {
        this.apiService.deletePlovilo(_id).subscribe();
    }


    getDrzaveAPI() {
        let sub = new BehaviorSubject<Drzava[]>([]);
        this.apiService.getDrzave().subscribe(a => {
            sub.next(a["resp"])
        });
        return sub;
    }

    getDrzavaAPI(_id: number) {
        let sub = new BehaviorSubject<Drzava>(new Drzava());
        this.apiService.getDrzava(_id).subscribe(a => {
            sub.next(a["resp"])
        });
        return sub;
    }

    postDrzavaAPI(_drzava: string) {
        this.apiService.postDrzava(_drzava).subscribe(() => window.close());
    }

    putDrzavaAPI(_id: number, _naziv: string) {
        this.apiService.putDrzava(_id, _naziv).subscribe(() => window.close());
    }

    deleteDrzavaAPI(_id: number) {
        this.apiService.deleteDrzava(_id).subscribe();
    }


    getMjestaAPI() {
        let sub = new BehaviorSubject<Mjesto[]>([]);
        this.apiService.getMjesta().subscribe(a => {
            sub.next(a["resp"]);
        });
        return sub;
    }

    getMjestoAPI(_id: number) {
        let sub = new BehaviorSubject<Mjesto>(new Mjesto());
        this.apiService.getMjesto(_id).subscribe(a => {
            sub.next(a["resp"]);
        });
        return sub;
    }

    postMjestoAPI(_naziv: string, _drzava_id: number) {
        this.apiService.postMjesto(_naziv, _drzava_id).subscribe(() => window.close());
    }

    putMjestoAPI(_naziv: string, _drzava_id: number, _id: number) {
        this.apiService.putMjesto(_naziv, _drzava_id, _id).subscribe(() => window.close());
    }

    deleteMjestoAPI(_id: number) {
        this.apiService.deleteMjesto(_id).subscribe();
    }


    getAdreseAPI() {
        let sub = new BehaviorSubject<Adresa[]>([]);
        this.apiService.getAdrese().subscribe(a => {
            sub.next(a["resp"]);
        });
        return sub;
    }

    getAdresaAPI(_id: number) {
        let sub = new BehaviorSubject<Adresa>(new Adresa());
        this.apiService.getAdresa(_id).subscribe(a => {
            sub.next(a["resp"]);
        });
        return sub;
    }

    postAdresaAPI(_mjesto_id: number, _adresa: string) {
        this.apiService.postAdresa(_mjesto_id, _adresa).subscribe(() => window.close());
    }

    putAdresaAPI(_mjesto_id: number, _adresa: string, _id: number) {
        this.apiService.putAdresa(_mjesto_id, _adresa, _id).subscribe(() => window.close());
    }

    deleteAdresaAPI(_id: number) {
        this.apiService.deleteAdresa(_id).subscribe();
    }


    getVlasniciAPI() {
        let sub = new BehaviorSubject<Vlasnik[]>([]);
        this.apiService.getMusterije().subscribe(a => {
            sub.next(a["resp"])
        });
        return sub;
    }

    getVlasnikAPI(_id: number) {
        let sub = new BehaviorSubject<Vlasnik>(new Vlasnik());
        this.apiService.getMusterija(_id).subscribe(a => {
            sub.next(a["resp"]);
        });
        return sub;
    }

    postVlasnikAPI(_ime: string, _prezime: string, _adresa_id: number, _oib: string) {
        this.apiService.postMusterija(_ime, _prezime, _adresa_id, _oib).subscribe(() => window.close());
    }

    putVlasnikAPI(_ime: string, _prezime: string, _adresa_id: number, _oib: string, _id: number) {
        this.apiService.putMusterija(_ime, _prezime, _adresa_id, _oib, _id).subscribe(() => window.close());
    }

    deleteVlasnikAPI(_id: number) {
        this.apiService.deleteMusterija(_id).subscribe();
    }

    getPrognozaAPI(): BehaviorSubject<Prognoza> {
        let sub = new BehaviorSubject<Prognoza>(new Prognoza())
        this.apiService.getPrognoza().subscribe((a: { wind: { speed: number, deg: number, gust: number }, main: { temp: number, feels_like: number }, weather: any }) => {
            let obj = new Prognoza(
                a.weather[0].description,
                a.main.temp,
                a.main.feels_like,
                a.wind.speed,
                a.wind.deg,
                a.wind.gust
            );
            sub.next(obj);
        });
        return sub;
    }

}
