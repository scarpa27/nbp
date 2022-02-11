import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Plovilo} from "../klase/plovilo.model";
import {DataService} from "../data.service";
import {BehaviorSubject} from "rxjs";
import {Drzava} from "../klase/drzava.model";
import {Vlasnik} from "../klase/vlasnik.model";

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

    vlasnici: Vlasnik[] = [];
    vlasniciSubject: BehaviorSubject<Vlasnik[]> = new BehaviorSubject<Vlasnik[]>(this.vlasnici);


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

    getDrzaveAPI() {
        this.dataService.getDrzave().subscribe(a => {
            // @ts-ignore
            this.drzave = a["resp"];
            // @ts-ignore
            this.drzaveSubject
                .next(this.drzave)
        });
        return this.drzaveSubject;
    }

    getVlasniciAPI() {
        this.dataService.getVlasnici().subscribe( a => {
            // @ts-ignore
            this.vlasnici = a["resp"];
            // @ts-ignore
            this.vlasniciSubject
                .next(this.vlasnici)
        })
        return this.vlasniciSubject;
    }




}
