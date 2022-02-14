import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Plovilo} from "../klase/plovilo.model";
import {DataService} from "../data.service";
import {BehaviorSubject} from "rxjs";
import {Drzava} from "../klase/drzava.model";
import {Vlasnik} from "../klase/vlasnik.model";
import {Mjesto} from "../klase/mjesto.model";
import {Adresa} from "../klase/adresa.model";

@Injectable({
    providedIn: 'root'
})
export class PloviloService {

    plovila: Plovilo[] = [];
    plovilaSubject: BehaviorSubject<Plovilo[]> = new BehaviorSubject<Plovilo[]>(this.plovila);

    plovilo: Plovilo = new Plovilo();
    ploviloSubject: BehaviorSubject<Plovilo> = new BehaviorSubject<Plovilo>(this.plovilo);

    drzave: Drzava[] = [];
    drzaveSubject: BehaviorSubject<Drzava[]> = new BehaviorSubject<Drzava[]>(this.drzave);

    drzava: Drzava = new Drzava();
    drzavaSubject: BehaviorSubject<Drzava> = new BehaviorSubject<Drzava>(this.drzava);

    vlasnici: Vlasnik[] = [];
    vlasniciSubject: BehaviorSubject<Vlasnik[]> = new BehaviorSubject<Vlasnik[]>(this.vlasnici);

    vlasnik: Vlasnik = new Vlasnik();
    vlasnikSubject: BehaviorSubject<Vlasnik> = new BehaviorSubject<Vlasnik>(this.vlasnik);

    mjesta: Mjesto[] = [];
    mjestaSubject: BehaviorSubject<Mjesto[]> = new BehaviorSubject<Mjesto[]>(this.mjesta);

    mjesto: Mjesto = new Mjesto();
    mjestoSubject: BehaviorSubject<Mjesto> = new BehaviorSubject<Mjesto>(this.mjesto);

    adrese: Adresa[] = [];
    adreseSubject: BehaviorSubject<Adresa[]> = new BehaviorSubject<Adresa[]>(this.adrese);

    adresa: Adresa = new Adresa();
    adresaSubject: BehaviorSubject<Adresa> = new BehaviorSubject<Adresa>(this.adresa);


    constructor(private http: HttpClient, private dataService: DataService) {
        this.init();
    }

    init() {
    }


    getPlovilaAPI() {
        this.dataService.getPlovila().subscribe(a => {
            // @ts-ignore
            this.plovila = a["resp"][0];
            this.plovilaSubject
                .next(this.plovila);
        });
        return this.plovilaSubject;
    }

    getPloviloAPI(_id: number) {
        this.dataService.getPlovilo(_id).subscribe(a => {
            // @ts-ignore
            this.plovilo = a["resp"][0][0];
            this.ploviloSubject
                .next(this.plovilo);
        });
        return this.ploviloSubject;
    }

    postPloviloAPI(_drzava_reg_id: number, _musterija_id: number, _naziv: string) {
        return this.dataService.postPlovilo(_drzava_reg_id, _musterija_id, _naziv).subscribe();
    }

    putPloviloAPI(_drzava_reg_id: number, _musterija_id: number, _naziv: string, _id: number) {
        return this.dataService.putPlovilo(_drzava_reg_id, _musterija_id, _naziv, _id).subscribe();
    }

    deletePloviloAPI(_id: number) {
        this.dataService.deletePlovilo(_id).subscribe();
    }


    getDrzaveAPI() {
        this.dataService.getDrzave().subscribe(a => {
            // @ts-ignore
            this.drzave = a["resp"];
            this.drzaveSubject
                .next(this.drzave)
        });
        return this.drzaveSubject;
    }

    getDrzavaAPI(_id: number) {
        this.dataService.getDrzava(_id).subscribe(a => {
            // @ts-ignore
            this.drzava = a["resp"];
            this.drzavaSubject
                .next(this.drzava)
        });
        return this.drzavaSubject;
    }

    postDrzavaAPI(_drzava: string) {
        this.dataService.postDrzava(_drzava).subscribe();
    }

    putDrzavaAPI(_id: number, _naziv: string) {
        this.dataService.putDrzava(_id, _naziv).subscribe();
    }

    deleteDrzavaAPI(_id: number) {
        this.dataService.deleteDrzava(_id).subscribe();
    }


    getMjestaAPI() {
        this.dataService.getMjesta().subscribe(a => {
            // @ts-ignore
            this.mjesta = a["resp"];
            this.mjestaSubject.next(this.mjesta);
        });
        return this.mjestaSubject;
    }

    getMjestoAPI(_id: number) {
        this.dataService.getMjesto(_id).subscribe(a => {
            // @ts-ignore
            this.mjesto = a["resp"];
            this.mjestoSubject.next(this.mjesto);
        });
        return this.mjestoSubject;
    }

    postMjestoAPI(_naziv: string, _drzava_id: number) {
        this.dataService.postMjesto(_naziv, _drzava_id).subscribe();
    }

    putMjestoAPI(_naziv: string, _drzava_id: number, _id: number) {
        this.dataService.putMjesto(_naziv, _drzava_id, _id).subscribe();
    }

    deleteMjestoAPI(_id: number) {
        this.dataService.deleteMjesto(_id).subscribe();
    }


    getAdreseAPI() {
        this.dataService.getAdrese().subscribe(a => {
            // @ts-ignore
            this.adrese = a["resp"];
            this.adreseSubject.next(this.adrese);
        });
        return this.adreseSubject;
    }

    getAdresaAPI(_id: number) {
        this.dataService.getAdresa(_id).subscribe(a => {
            // @ts-ignore
            this.adresa = a["resp"];
            this.adresaSubject.next(this.adresa);
        });
        return this.adresaSubject;
    }

    postAdresaAPI(_mjesto_id: number, _adresa: string) {
        this.dataService.postAdresa(_mjesto_id, _adresa).subscribe();
    }

    putAdresaAPI(_mjesto_id: number, _adresa: string, _id: number) {
        this.dataService.putAdresa(_mjesto_id, _adresa, _id).subscribe();
    }

    deleteAdresaAPI(_id: number) {
        this.dataService.deleteAdresa(_id).subscribe();
    }


    getVlasniciAPI() {
        this.dataService.getMusterije().subscribe(a => {
            // @ts-ignore
            this.vlasnici = a["resp"];
            this.vlasniciSubject
                .next(this.vlasnici)
        })
        return this.vlasniciSubject;
    }

    getVlasnikAPI(_id: number) {
        this.dataService.getMusterija(_id).subscribe(a => {
            // @ts-ignore
            this.vlasnik = a["resp"];
            this.vlasnikSubject.next(this.vlasnik);
        });
        return this.vlasnikSubject;
    }

    postVlasnikAPI(_ime: string, _prezime: string, _adresa_id: number, _oib: string) {
        this.dataService.postMusterija(_ime, _prezime, _adresa_id, _oib).subscribe();
    }

    putVlasnikAPI(_ime: string, _prezime: string, _adresa_id: number, _oib: string, _id: number) {
        this.dataService.putMusterija(_ime, _prezime, _adresa_id, _oib, _id).subscribe();
    }

    deleteVlasnikAPI(_id: number) {
        this.dataService.deleteMusterija(_id).subscribe();
    }


    goToLink(link: string) {
        let a = window.open(link, "_blank", "resizable=no, toolbar=no, menubar=no location=no");
        a?.focus();
    }


}
