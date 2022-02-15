import {Component, OnInit} from '@angular/core';
import {PloviloService} from "../../../servisi/plovilo.service";

@Component({
    selector: 'app-brisanje',
    templateUrl: './brisanje.component.html',
    styleUrls: ['./brisanje.component.css']
})
export class BrisanjeComponent implements OnInit {

    delPlovilo_id: number = 0;
    delVlasnik_id: number = 0;
    delDrzava_id: number = 0;

    constructor(public ps: PloviloService) {
    }

    ngOnInit(): void {
        this.plovila();
        this.vlasnici();
        this.drzave();
    }

    plovila() {
        this.ps.getPlovilaAPI().subscribe(a => {
            // @ts-ignore
            this.ps.plovila = a["resp"][0];
            this.ps.plovilaSubject.next(this.ps.plovila);
            this.ps.plovilaSubject.subscribe(b => {
                this.ps.plovila = b;
            });
        });
    }

    delPlovilo() {
        this.ps.deletePloviloAPI(this.delPlovilo_id);
        this.plovila();
        this.delPlovilo_id = 0;
    }

    vlasnici() {
        this.ps.getVlasniciAPI().subscribe(a => {
            // @ts-ignore
            this.ps.vlasnici = a["resp"];
            this.ps.vlasniciSubject.next(this.ps.vlasnici);
            this.ps.vlasniciSubject.subscribe(b => {
                this.ps.vlasnici = b;
            });
        });
    }

    delVlasnik() {
        this.ps.deleteVlasnikAPI(this.delVlasnik_id);
        this.vlasnici();
        this.delVlasnik_id = 0;
    }

    drzave() {
        this.ps.getDrzaveAPI().subscribe(a => {
            // @ts-ignore
            this.ps.drzave = a["resp"];
            this.ps.drzaveSubject.next(this.ps.drzave);
            this.ps.drzaveSubject.subscribe(b => {
                this.ps.drzave = b;
            });
        });
    }

    delDrzava() {
        this.ps.deleteDrzavaAPI(this.delDrzava_id);
        this.drzave();
        this.delDrzava_id = 0;
    }

}
