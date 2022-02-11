import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Plovilo} from "./plovilo.model";
import {DataService} from "../data.service";
import {BehaviorSubject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PloviloService {

    plovila: Plovilo[] = [];
    plovilaSubject: BehaviorSubject<Plovilo[]> = new BehaviorSubject<Plovilo[]>(this.plovila);

    plovilo: Plovilo = new Plovilo();
    ploviloSubject: BehaviorSubject<Plovilo> = new BehaviorSubject<Plovilo>(this.plovilo);


    constructor(private http: HttpClient, private dataService: DataService) {
        this.init();
    }

    init() {
    }

    getPlovilaAPI() {
        this.dataService.getPlovila().subscribe(a => {
            // @ts-ignore
            this.plovila = a["resp"][0];
            console.log(this.plovila);
            this.plovilaSubject
                .next(this.plovila);
            console.log(this.plovilaSubject);
        });
        return this.plovilaSubject;
    }

    getPloviloAPI(_id: number) {
        this.dataService.getPlovilo(_id).subscribe(a => {
            // @ts-ignore
            this.plovilo = a["resp"][0][0];
            console.log(this.plovilo);
            this.ploviloSubject
                .next(this.plovilo);
            console.log(this.ploviloSubject);
        });
        return this.ploviloSubject;
    }


}
